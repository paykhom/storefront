import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { JetpackTools } from './jetpackTools';

const engine = new Hono();
const pluginManager = new PluginManager(engine);

const jetpack = new JetpackTools();
jetpack.on 돈ifecycleEvent('onDidInitialize', () => console.log('Jetpack Initialized'));
jetpack.addFilter('responseHeaders', (headers: Record<string, string>) => ({
  ...headers,
  'X-Custom': 'Jetpack',
}));
pluginManager.register(jetpack, { enabled: true, priority: 4, debug: true });
pluginManager.initializeAll();

engine.get('/test', (c) => c.json({ message: 'Test' }));

export default engine;