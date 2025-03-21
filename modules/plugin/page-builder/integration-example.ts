import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { PageBuilder } from './pageBuilder';

const app = new Hono();
const pluginManager = new PluginManager(app);

const builder = new PageBuilder();
builder.onLifecycleEvent('onDidInitialize', () => console.log('PageBuilder Initialized'));
builder.addFilter('pageContent', (html: string) => `<main>${html}</main>`, 20); // Wrap in <main>
pluginManager.register(builder, { enabled: true, priority: 2, debug: true });
pluginManager.initializeAll();

export default app;