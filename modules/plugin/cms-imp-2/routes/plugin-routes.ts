import { Hono } from 'hono';
import PluginModule from '../modules/plugin.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const pluginModule = new PluginModule(pgClient);

app.get('/plugins/:slug', async (c) => {
  const plugin = await pluginModule.get(c.req.param('slug'));
  return plugin ? c.json(plugin) : c.json({ error: 'Not found' }, 404);
});

app.get('/plugins', async (c) => {
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
  };
  const plugins = await pluginModule.list(query);
  return c.json(plugins);
});

app.post('/plugins/:slug/activate', async (c) => {
  await pluginModule.activate(c.req.param('slug'));
  return c.json({ success: true });
});

app.post('/plugins/:slug/deactivate', async (c) => {
  await pluginModule.deactivate(c.req.param('slug'));
  return c.json({ success: true });
});

app.post('/plugins', async (c) => {
  const data = await c.req.json<Partial<IPlugin>>();
  const plugin = await pluginModule.install(data);
  return c.json(plugin, 201);
});

app.delete('/plugins/:slug', async (c) => {
  await pluginModule.uninstall(c.req.param('slug'));
  return c.json({ success: true });
});

export default app;