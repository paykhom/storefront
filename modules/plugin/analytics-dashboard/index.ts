// src/plugins/analyticsDashboard/index.ts
import { Context, Next, Hono } from 'hono';
import { IPlugin, LifecycleEvent, ActionCallback, FilterCallback } from '../interfaces';
import { AnalyticsData, DashboardConfig } from './types';
import { Component } from '../../../component';

export class AnalyticsDashboard extends Component implements IPlugin {
  public name = 'analyticsDashboard';
  public description = 'Collects and visualizes analytics data from plugins';
  public version = '1.0.0';
  public author = 'xAI';
  public dependencies: string[] = [];
  public conflicts: string[] = [];

  private analytics: AnalyticsData[] = [];
  //private config: Record<string, any> = { refreshInterval: 60, chartType: 'line' };
  //private state: Map<string, any> = new Map();
  private logs: { level: string; message: string; timestamp: string }[] = [];
  private cache: Map<string, { data: any; expires: number }> = new Map();
  private debug = false;
  private metrics = { requests: 0, errors: 0, latency: 0 };
  private lifecycleListeners = new Map<LifecycleEvent, ((context?: any) => void)[]>();
  private actions = new Map<string, { callback: ActionCallback; priority: number }[]>();
  private filters = new Map<string, { callback: Function; priority: number }[]>();

  public initialize(): void {
    this.emitLifecycleEvent('onWillInitialize');
    this.logInfo('AnalyticsDashboard initialized');
    this.state.set('initialized', true);
    this.addAction('trackEvent', (data: AnalyticsData) => this.analytics.push(data));
    this.addFilter('dashboardData', (data: AnalyticsData[]) => data.slice(-100)); // Limit to last 100 events
    this.emitLifecycleEvent('onDidInitialize');
  }

  public shutdown(): void {
    this.emitLifecycleEvent('onWillShutdown');
    this.logInfo('AnalyticsDashboard shutting down');
    this.clearState();
    this.clearCache();
    this.emitLifecycleEvent('onDidShutdown');
  }

  public reload(): void {
    this.emitLifecycleEvent('onWillReload');
    this.shutdown();
    this.initialize();
    this.logInfo('AnalyticsDashboard reloaded');
    this.emitLifecycleEvent('onDidReload');
  }

  public onError(error: Error): void {
    this.metrics.errors++;
    this.logError('Error in AnalyticsDashboard', error);
  }

  public middleware(): (c: Context, next: Next) => Promise<void> {
    return async (c: Context, next: Next) => {
      const start = Date.now();
      this.metrics.requests++;
      this.emitLifecycleEvent('onWillProcessRequest', c);

      try {
        await next();
        const latency = Date.now() - start;
        this.trackEvent('Request', c.req.method, c.req.path, latency);
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
    engine.get('/analytics/data', (c) => {
      const data = this.applyFilters('dashboardData', this.analytics);
      return c.json(data);
    });
  }

  private getAdminMenu(basePath: string): string {
    return `
      <ul>
        <li><a href="${basePath}">Dashboard</a></li>
        <li><a href="${basePath}/events">Events</a></li>
        <li><a href="${basePath}/config">Configuration</a></li>
        <li><a href="${basePath}/logs">Logs</a></li>
        <li><a href="${basePath}/status">Status</a></li>
      </ul>
    `;
  }

  public registerAdminRoutes(engine: WebEngine, basePath: string): void {
    const menu = this.getAdminMenu(basePath);

    engine.get(`${basePath}`, (c) => {
      const data = this.applyFilters('dashboardData', this.analytics);
      return c.html(`
        <h1>Analytics Dashboard</h1>
        ${menu}
        <canvas id="analyticsChart"></canvas>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
          const ctx = document.getElementById('analyticsChart').getContext('2d');
          const chart = new Chart(ctx, {
            type: '${this.config.chartType}',
            data: {
              labels: ${JSON.stringify(data.map(d => d.timestamp))},
              datasets: [{
                label: 'Events',
                data: ${JSON.stringify(data.map(d => d.value || 1))},
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }]
            },
            options: {
              scales: { y: { beginAtZero: true } },
              animation: false
            }
          });
          setInterval(() => fetch('/analytics/data').then(res => res.json()).then(data => {
            chart.data.labels = data.map(d => d.timestamp);
            chart.data.datasets[0].data = data.map(d => d.value || 1);
            chart.update();
          }), ${this.config.refreshInterval * 1000});
        </script>
      `);
    });

    engine.get(`${basePath}/events`, (c) => {
      const data = this.applyFilters('dashboardData', this.analytics);
      return c.html(`
        <h1>Analytics Events</h1>
        ${menu}
        <ul>${data.map(d => `<li>${d.timestamp} [${d.category}] ${d.action} - ${d.label || ''} (${d.value || 1})</li>`).join('')}</ul>
      `);
    });

    engine.get(`${basePath}/config`, (c) => {
      const currentConfig = this.getConfig();
      return c.html(`
        <h1>Analytics Config</h1>
        ${menu}
        <form method="POST" action="${basePath}/config">
          <label>Refresh Interval (seconds): <input type="number" name="refreshInterval" value="${currentConfig.refreshInterval}"></label><br>
          <label>Chart Type: 
            <select name="chartType">
              <option value="line" ${currentConfig.chartType === 'line' ? 'selected' : ''}>Line</option>
              <option value="bar" ${currentConfig.chartType === 'bar' ? 'selected' : ''}>Bar</option>
              <option value="pie" ${currentConfig.chartType === 'pie' ? 'selected' : ''}>Pie</option>
            </select>
          </label><br>
          <button type="submit">Save</button>
        </form>
      `);
    });

    engine.post(`${basePath}/config`, async (c) => {
      const formData = await c.req.parseBody();
      this.setConfig('refreshInterval', Number(formData.refreshInterval));
      this.setConfig('chartType', formData.chartType as DashboardConfig['chartType']);
      this.logInfo('Configuration updated via admin');
      return c.redirect(`${basePath}/config`);
    });

    engine.get(`${basePath}/logs`, (c) => {
      const logs = this.getLogs();
      return c.html(`
        <h1>AnalyticsDashboard Logs</h1>
        ${menu}
        <ul>${logs.map(log => `<li>${log.timestamp} [${log.level}] ${log.message}</li>`).join('')}</ul>
      `);
    });

    engine.get(`${basePath}/status`, (c) => {
      const status = this.getStatus();
      const metrics = this.getMetrics();
      return c.html(`
        <h1>AnalyticsDashboard Status</h1>
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
    return [{ method: 'GET', path: '/analytics/data', handler: () => {} }];
  }

  public removeRoute(_method: string, _path: string): void {}

  public getConfig(): Record<string, any> { return { ...this.config }; }
  public setConfig(key: string, value: any): void {
    this.config[key] = value;
    this.emitLifecycleEvent('onDidChangeConfig', { key, value });
  }
  public loadConfig(config: Record<string, any>): void { this.config = { ...config }; }
  public resetConfig(): void { this.config = { refreshInterval: 60, chartType: 'line' }; }

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
    const event: AnalyticsData = { timestamp: new Date().toISOString(), category, action, label, value };
    this.doAction('trackEvent', event);
    this.emitEvent('analytics', event);
  }

  public getAnalytics(): Record<string, any> { return { events: [...this.analytics] }; }
  public resetAnalytics(): void { this.analytics = []; }

  public validate(data: any, schema: Record<string, any>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (schema.category && !data.category) errors.push('Category is required');
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
}

export const analyticsDashboard = new AnalyticsDashboard();