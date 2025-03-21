import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { ContactFormPlugin } from './contactForm';

const app = new Hono();
const pluginManager = new PluginManager(app);

const contact = new ContactFormPlugin();
contact.onLifecycleEvent('onDidInitialize', () => console.log('ContactForm Initialized'));
contact.addFilter('formHtml', (html: string) => `<section>${html}</section>`, 20); // Wrap in <section>
pluginManager.register(contact, { enabled: true, priority: 5, debug: true });
pluginManager.initializeAll();

export default app;