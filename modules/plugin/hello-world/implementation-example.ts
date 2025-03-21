import { Hono } from 'hono';
import PluginManager from '../../plugin-manager';
import { HelloPlugin } from './';

const app = new Hono();
const pluginManager = new PluginManager(app);

const hello = new HelloPlugin();
hello.onLifecycleEvent('onDidInitialize', () => console.log('HelloPlugin Initialized'));
hello.addFilter('pageContent', (html: string) => `<main>${html}</main>`, 20); // Wrap in <main>
pluginManager.register(hello, { enabled: true, priority: 2, debug: true });
pluginManager.initializeAll();

export default app;