import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { SeoOptimizer } from './seoOptimizer';

const engine = new Hono();
const pluginManager = new PluginManager(engine);

const seo = new SeoOptimizer();
seo.onLifecycleEvent('onDidInitialize', () => console.log('SEO Initialized'));
seo.addFilter('seoTitle', (title: string) => title.toUpperCase(), 20); // Higher priority to override default
pluginManager.register(seo, { enabled: true, priority: 1, debug: true });
pluginManager.initializeAll();

engine.get('/product/:id', (c) => {
  c.set('product', { name: 'Cool Shirt', description: 'A very cool shirt', keywords: ['shirt'] });
  return c.json({ message: 'Product page' });
});

export default engine;