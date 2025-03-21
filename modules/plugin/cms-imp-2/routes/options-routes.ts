import { Hono } from 'hono';
import OptionsModule from '../modules/options.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const optionsModule = new OptionsModule(pgClient);

app.get('/options/:key', async (c) => {
  const value = await optionsModule.get(c.req.param('key'));
  return value !== null ? c.json(value) : c.json({ error: 'Not found' }, 404);
});

app.put('/options/:key', async (c) => {
  const value = await c.req.json<any>();
  await optionsModule.update(c.req.param('key'), value);
  return c.json({ success: true });
});

app.delete('/options/:key', async (c) => {
  await optionsModule.delete(c.req.param('key'));
  return c.json({ success: true });
});

export default app;