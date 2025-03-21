import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { EcommercePlatform } from './ecommercePlatform';

const engine = new Hono();
const pluginManager = new PluginManager(engine);

const ecommerce = new EcommercePlatform();
ecommerce.onLifecycleEvent('onDidInitialize', () => console.log('Ecommerce Initialized'));
ecommerce.addFilter('productPrice', (price: number) => price + 5, 20); // Add $5 surcharge
pluginManager.register(ecommerce, { enabled: true, priority: 3, debug: true });
pluginManager.initializeAll();

engine.get('/test', (c) => {
  c.set('userId', 'user1');
  return c.json({ message: 'Test' });
});

export default engine;