  // src/plugins/contactForm/index.ts
  import { Context, Next, Hono } from 'hono';
  import { IPlugin, LifecycleEvent, ActionCallback, FilterCallback } from '../interfaces';
  import { ContactForm, FormField, Submission } from './types';
import { Component } from '../../../component';
  
  export class ContactFormPlugin extends Component {
    public name = 'contactForm';
    public description = 'Manages contact forms and submissions';
    public version = '1.0.0';
    public author = 'xAI';
    public dependencies: string[] = [];
    public conflicts: string[] = [];
  
    private forms: Map<string, ContactForm> = new Map();
    private submissions: Submission[] = [];
    // private config: Record<string, any> = { emailTo: 'admin@example.com', enableSpamFilter: true };
    // private state: Map<string, any> = new Map();
    private logs: { level: string; message: string; timestamp: string }[] = [];
    private cache: Map<string, { data: any; expires: number }> = new Map();
    private debug = false;
    private metrics = { requests: 0, errors: 0, latency: 0 };
    private lifecycleListeners = new Map<LifecycleEvent, ((context?: any) => void)[]>();
    private actions = new Map<string, { callback: ActionCallback; priority: number }[]>();
    private filters = new Map<string, { callback: Function; priority: number }[]>();
  
    constructor() {
      // Seed a default form
      this.forms.set('contact-1', {
        id: 'contact-1',
        title: 'Contact Us',
        fields: [
          { name: 'name', type: 'text', label: 'Your Name', required: true },
          { name: 'email', type: 'email', label: 'Your Email', required: true },
          { name: 'message', type: 'textarea', label: 'Message', required: true },
          { name: 'submit', type: 'submit', label: 'Send' },
        ],
      });
    }
  
    public initialize(): void {
      this.emitLifecycleEvent('onWillInitialize');
      this.logInfo('ContactForm initialized');
      this.state.set('initialized', true);
      this.addAction('formSubmission', (submission: Submission) =>
        this.logInfo(`Form ${submission.formId} submitted`)
      );
      this.addFilter('formHtml', (html: string) => `<div class="contact-form">${html}</div>`);
      this.emitLifecycleEvent('onDidInitialize');
    }
  
    public shutdown(): void {
      this.emitLifecycleEvent('onWillShutdown');
      this.logInfo('ContactForm shutting down');
      this.clearState();
      this.clearCache();
      this.emitLifecycleEvent('onDidShutdown');
    }
  
    public reload(): void {
      this.emitLifecycleEvent('onWillReload');
      this.shutdown();
      this.initialize();
      this.logInfo('ContactForm reloaded');
      this.emitLifecycleEvent('onDidReload');
    }
  
    public onError(error: Error): void {
      this.metrics.errors++;
      this.logError('Error in ContactForm', error);
    }
  
    public middleware(): (c: Context, next: Next) => Promise<void> {
      return async (c: Context, next: Next) => {
        const start = Date.now();
        this.metrics.requests++;
        this.emitLifecycleEvent('onWillProcessRequest', c);
  
        try {
          await next();
        } catch (e) {
          this.onError(e as Error);
          throw e;
        } finally {
          this.metrics.latency = (this.metrics.latency + (Date.now() - start)) / 2;
          this.emitLifecycleEvent('onDidProcessRequest', c);
        }
      };
    }
  
    public preMiddleware(): (c: Context, next: Next) => Promise<void> {
      return async (c: Context, next: Next) => {
        this.logInfo(`Pre-processing request to ${c.req.path}`);
        await next();
      };
    }
  
    public postMiddleware(): (c: Context, next: Next) => Promise<void> {
      return async (c: Context, next: Next) => {
        this.optimizeResponse(c);
        await next();
      };
    }
  
    public registerRoutes(engine: WebEngine): void {
      engine.get('/contact/:id', (c) => {
        const form = this.forms.get(c.req.param('id'));
        if (!form) return c.html('Form not found', 404);
        const html = this.generateFormHtml(form);
        return c.html(this.applyFilters('formHtml', html));
      });
  
      engine.post('/contact/:id/submit', async (c) => {
        const formId = c.req.param('id');
        const form = this.forms.get(formId);
        if (!form) return c.json({ error: 'Form not found' }, 404);
  
        const data = await c.req.parseBody();
        if (this.config.enableSpamFilter && this.isSpam(data)) {
          this.logWarning(`Spam detected in submission for form ${formId}`);
          return c.json({ error: 'Submission blocked as spam' }, 403);
        }
  
        const submission: Submission = { formId, data, timestamp: new Date().toISOString() };
        this.submissions.push(submission);
        this.doAction('formSubmission', submission);
        this.trackEvent('Form', 'Submit', formId);
        return c.json({ success: true });
      });
    }
  
    private getAdminMenu(basePath: string): string {
      return `
        <ul>
          <li><a href="${basePath}">Dashboard</a></li>
          <li><a href="${basePath}/forms">Forms</a></li>
          <li><a href="${basePath}/submissions">Submissions</a></li>
          <li><a href="${basePath}/config">Configuration</a></li>
          <li><a href="${basePath}/logs">Logs</a></li>
          <li><a href="${basePath}/status">Status</a></li>
        </ul>
      `;
    }
  
    public registerAdminRoutes(engine: WebEngine, basePath: string): void {
      const menu = this.getAdminMenu(basePath);
  
      engine.get(`${basePath}`, (c) => {
        return c.html(`
          <h1>ContactForm Admin</h1>
          ${menu}
          <p>Manage contact forms and submissions</p>
        `);
      });
  
      engine.get(`${basePath}/forms`, (c) => {
        const forms = Array.from(this.forms.values());
        return c.html(`
          <h1>Forms</h1>
          ${menu}
          <ul>${forms.map(f => `<li>${f.title} (${f.id}) <a href="${basePath}/forms/edit/${f.id}">Edit</a></li>`).join('')}</ul>
          <a href="${basePath}/forms/new">Add New Form</a>
        `);
      });
  
      engine.get(`${basePath}/forms/new`, (c) => {
        return c.html(`
          <h1>New Form</h1>
          ${menu}
          <form method="POST" action="${basePath}/forms">
            <label>ID: <input type="text" name="id"></label><br>
            <label>Title: <input type="text" name="title"></label><br>
            <button type="submit">Create</button>
          </form>
        `);
      });
  
      engine.post(`${basePath}/forms`, async (c) => {
        const formData = await c.req.parseBody();
        const form: ContactForm = {
          id: formData.id as string,
          title: formData.title as string,
          fields: [],
        };
        this.forms.set(form.id, form);
        this.logInfo(`Created form: ${form.title}`);
        return c.redirect(`${basePath}/forms/edit/${form.id}`);
      });
  
      engine.get(`${basePath}/forms/edit/:id`, (c) => {
        const form = this.forms.get(c.req.param('id'));
        if (!form) return c.html('Form not found', 404);
        return c.html(`
          <h1>Edit Form: ${form.title}</h1>
          ${menu}
          <form method="POST" action="${basePath}/forms/edit/${form.id}">
            <label>Title: <input type="text" name="title" value="${form.title}"></label><br>
            <h3>Fields</h3>
            ${form.fields.map(f => `
              <div>
                <input type="text" name="fields[${f.name}][label]" value="${f.label}">
                <input type="text" name="fields[${f.name}][type]" value="${f.type}">
                <input type="checkbox" name="fields[${f.name}][required]" ${f.required ? 'checked' : ''}>
              </div>
            `).join('')}
            <button type="submit">Save</button>
          </form>
          <form method="POST" action="${basePath}/forms/add-field/${form.id}">
            <label>New Field Name: <input type="text" name="name"></label><br>
            <label>Type: <select name="type">
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="textarea">Textarea</option>
              <option value="submit">Submit</option>
            </select></label><br>
            <label>Required: <input type="checkbox" name="required"></label><br>
            <button type="submit">Add Field</button>
          </form>
        `);
      });
  
      engine.post(`${basePath}/forms/edit/:id`, async (c) => {
        const form = this.forms.get(c.req.param('id'));
        if (!form) return c.html('Form not found', 404);
        const formData = await c.req.parseBody();
        form.title = formData.title as string;
        this.logInfo(`Updated form: ${form.title}`);
        return c.redirect(`${basePath}/forms`);
      });
  
      engine.post(`${basePath}/forms/add-field/:id`, async (c) => {
        const form = this.forms.get(c.req.param('id'));
        if (!form) return c.html('Form not found', 404);
        const formData = await c.req.parseBody();
        const field: FormField = {
          name: formData.name as string,
          type: formData.type as FormField['type'],
          label: formData.name as string,
          required: formData.required === 'on',
        };
        form.fields.push(field);
        this.logInfo(`Added field ${field.name} to form ${form.id}`);
        return c.redirect(`${basePath}/forms/edit/${form.id}`);
      });
  
      engine.get(`${basePath}/submissions`, (c) => {
        return c.html(`
          <h1>Submissions</h1>
          ${menu}
          <ul>${this.submissions.map(s => `<li>${s.timestamp} - Form ${s.formId}: ${JSON.stringify(s.data)}</li>`).join('')}</ul>
        `);
      });
  
      engine.get(`${basePath}/config`, (c) => {
        const currentConfig = this.getConfig();
        return c.html(`
          <h1>ContactForm Config</h1>
          ${menu}
          <form method="POST" action="${basePath}/config">
            <label>Email To: <input type="email" name="emailTo" value="${currentConfig.emailTo}"></label><br>
            <label>Enable Spam Filter: <input type="checkbox" name="enableSpamFilter" ${currentConfig.enableSpamFilter ? 'checked' : ''}></label><br>
            <button type="submit">Save</button>
          </form>
        `);
      });
  
      engine.post(`${basePath}/config`, async (c) => {
        const formData = await c.req.parseBody();
        this.setConfig('emailTo', formData.emailTo);
        this.setConfig('enableSpamFilter', formData.enableSpamFilter === 'on');
        this.logInfo('Configuration updated via admin');
        return c.redirect(`${basePath}/config`);
      });
  
      engine.get(`${basePath}/logs`, (c) => {
        const logs = this.getLogs();
        return c.html(`
          <h1>ContactForm Logs</h1>
          ${menu}
          <ul>${logs.map(log => `<li>${log.timestamp} [${log.level}] ${log.message}</li>`).join('')}</ul>
        `);
      });
  
      engine.get(`${basePath}/status`, (c) => {
        const status = this.getStatus();
        const metrics = this.getMetrics();
        return c.html(`
          <h1>ContactForm Status</h1>
          ${menu}
          <p>Enabled: ${status.enabled}</p>
          <p>Initialized: ${status.initialized}</p>
          <p>Errors: ${status.errors.length}</p>
          <p>Requests: ${metrics.requests}</p>
          <p>Average Latency: ${metrics.latency.toFixed(2)}ms</p>
        `);
      });
    }
  
    public getRoutes(): { method: string; path: string; handler: Function }[] {
      return [
        { method: 'GET', path: '/contact/:id', handler: () => {} },
        { method: 'POST', path: '/contact/:id/submit', handler: () => {} },
      ];
    }
  
    public removeRoute(_method: string, _path: string): void {}
  
    public getConfig(): Record<string, any> { return { ...this.config }; }
    public setConfig(key: string, value: any): void {
      this.config[key] = value;
      this.emitLifecycleEvent('onDidChangeConfig', { key, value });
    }
    public loadConfig(config: Record<string, any>): void { this.config = { ...config }; }
    public resetConfig(): void { this.config = { emailTo: 'admin@example.com', enableSpamFilter: true }; }
  
    public getState<T>(key: string): T | undefined { return this.state.get(key); }
    public setState(key: string, value: any): void { this.state.set(key, value); }
    public clearState(): void { this.state.clear(); }
  
    public emitEvent(eventName: string, payload: any): void {
      this.lifecycleListeners.get(eventName as LifecycleEvent)?.forEach(cb => cb(payload));
    }
  
    public onEvent(eventName: string, callback: (payload: any) => void): void {
      this.onLifecycleEvent(eventName as LifecycleEvent, callback);
    }
  
    public removeEventListener(eventName: string): void {
      this.lifecycleListeners.delete(eventName as LifecycleEvent);
    }
  
    public onLifecycleEvent(event: LifecycleEvent, callback: (context?: any) => void): void {
      const listeners = this.lifecycleListeners.get(event) || [];
      listeners.push(callback);
      this.lifecycleListeners.set(event, listeners);
    }
  
    public emitLifecycleEvent(event: LifecycleEvent, context?: any): void {
      this.lifecycleListeners.get(event)?.forEach(cb => cb(context));
    }
  
    public addAction(action: string, callback: ActionCallback, priority: number = 10): void {
      const actions = this.actions.get(action) || [];
      actions.push({ callback, priority });
      this.actions.set(action, actions.sort((a, b) => a.priority - b.priority));
    }
  
    public doAction(action: string, ...config: any[]): void {
      this.actions.get(action)?.forEach(({ callback }) => callback(...config));
    }
  
    public removeAction(action: string, callback: ActionCallback): void {
      const actions = this.actions.get(action)?.filter(a => a.callback !== callback);
      if (actions) this.actions.set(action, actions);
    }
  
    public addFilter<T>(filter: string, callback: FilterCallback<T>, priority: number = 10): void {
      const filters = this.filters.get(filter) || [];
      filters.push({ callback, priority });
      this.filters.set(filter, filters.sort((a, b) => a.priority - b.priority));
    }
  
    public applyFilters<T>(filter: string, value: T, ...config: any[]): T {
      let result = value;
      this.filters.get(filter)?.forEach(({ callback }) => {
        result = callback(result, ...config);
      });
      return result;
    }
  
    public removeFilter<T>(filter: string, callback: FilterCallback<T>): void {
      const filters = this.filters.get(filter)?.filter(f => f.callback !== callback);
      if (filters) this.filters.set(filter, filters);
    }
  
    public logInfo(message: string, meta?: Record<string, any>): void {
      this.logs.push({ level: 'info', message, timestamp: new Date().toISOString() });
      if (this.debug) console.log(`[${this.name} INFO] ${message}`, meta || '');
    }
  
    public logWarning(message: string, meta?: Record<string, any>): void {
      this.logs.push({ level: 'warn', message, timestamp: new Date().toISOString() });
      if (this.debug) console.warn(`[${this.name} WARN] ${message}`, meta || '');
    }
  
    public logError(message: string, error?: Error): void {
      this.logs.push({ level: 'error', message, timestamp: new Date().toISOString() });
      if (this.debug) console.error(`[${this.name} ERROR] ${message}`, error || '');
    }
  
    public getLogs(): { level: string; message: string; timestamp: string }[] { return [...this.logs]; }
  
    public authenticateRequest(_c: Context): boolean { return true; }
    public authorizeRequest(_c: Context, _action: string): boolean { return true; }
    public sanitizeInput(input: any): any { return input; }
    public blockIp(ip: string): void { this.emitEvent('blockIp', ip); }
    public unblockIp(ip: string): void { this.emitEvent('unblockIp', ip); }
  
    public cacheResponse(key: string, data: any, ttl: number): void {
      this.cache.set(key, { data, expires: Date.now() + ttl * 1000 });
    }
  
    public getCachedResponse(key: string): any | undefined {
      const cached = this.cache.get(key);
      return cached && cached.expires > Date.now() ? cached.data : undefined;
    }
  
    public clearCache(): void { this.cache.clear(); }
  
    public optimizeResponse(c: Context): void {
      c.header('X-Optimized-By', this.name);
    }
  
    public readData<T>(_key: string): T | undefined { return undefined; }
    public writeData(_key: string, _value: any): void {}
    public deleteData(_key: string): void {}
    public async backupData(): Promise<string> { return this.generateId(); }
    public async restoreData(_backupId: string): Promise<void> {}
  
    public trackEvent(category: string, action: string, label?: string, value?: number): void {
      this.emitEvent('analytics', { category, action, label, value });
    }
  
    public getAnalytics(): Record<string, any> { return { submissions: this.submissions.length }; }
    public resetAnalytics(): void {}
  
    public validate(data: any, schema: Record<string, any>): { valid: boolean; errors: string[] } {
      const errors: string[] = [];
      if (schema.id && !data.id) errors.push('ID is required');
      return { valid: errors.length === 0, errors };
    }
  
    public generateId(): string { return Math.random().toString(36).slice(2); }
    public hashData(data: string): string { return Buffer.from(data).toString('base64'); }
    public throttle(fn: Function, _ms: number): Function { return fn; }
  
    public beforeRequest?(c: Context): void { this.logInfo(`Request to ${c.req.path}`); }
    public afterRequest?(c: Context): void { this.logInfo(`Response sent for ${c.req.path}`); }
    public onPluginLoaded?(pluginName: string): void { this.logInfo(`Plugin loaded: ${pluginName}`); }
    public onShutdown?(): void { this.logInfo('Shutting down'); }
  
    public isEnabled(): boolean { return this.getState('initialized') || false; }
    public getStatus(): { enabled: boolean; initialized: boolean; errors: string[] } {
      return { enabled: true, initialized: this.isEnabled(), errors: this.logs.filter(l => l.level === 'error').map(l => l.message) };
    }
  
    public debugMode(enable: boolean): void { this.debug = enable; }
    public getMetrics(): { requests: number; errors: number; latency: number } { return { ...this.metrics }; }
  
    private generateFormHtml(form: ContactForm): string {
      return `
        <form method="POST" action="/contact/${form.id}/submit">
          ${form.fields.map(f => `
            <div>
              <label>${f.label}${f.required ? ' *' : ''}</label>
              ${f.type === 'textarea' ? `<textarea name="${f.name}" ${f.required ? 'required' : ''}></textarea>` :
                f.type === 'submit' ? `<button type="submit">${f.label}</button>` :
                `<input type="${f.type}" name="${f.name}" ${f.required ? 'required' : ''}>`}
            </div>
          `).join('')}
        </form>
      `;
    }
  
    private isSpam(data: Record<string, string>): boolean {
      // Simple spam check: reject if 'url' field exists (common spam indicator)
      return 'url' in data;
    }
  }
  
  export const contactForm = new ContactFormPlugin();