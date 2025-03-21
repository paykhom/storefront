import { Hono } from 'hono';
import ThemeModule from '../modules/theme.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const themeModule = new ThemeModule(pgClient);

app.get('/themes/:name', async (c) => {
  const theme = await themeModule.get(c.req.param('name'));
  return theme ? c.json(theme) : c.json({ error: 'Not found' }, 404);
});

app.get('/themes', async (c) => {
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
  };
  const themes = await themeModule.list(query);
  return c.json(themes);
});

app.get('/themes/current', async (c) => {
  const theme = await themeModule.getCurrent();
  return theme ? c.json(theme) : c.json({ error: 'No active theme' }, 404);
});

app.post('/themes/:name/activate', async (c) => {
  await themeModule.activate(c.req.param('name'));
  return c.json({ success: true });
});

app.put('/themes/:name/customize', async (c) => {
  const settings = await c.req.json<Record<string, any>>();
  await themeModule.customize(c.req.param('name'), settings);
  return c.json({ success: true });
});

export default app;