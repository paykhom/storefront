import { Hono } from 'hono';
import RewriteModule from '../modules/rewrite.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const rewriteModule = new RewriteModule(pgClient);

app.post('/rewrite/rules', async (c) => {
  const rule = await c.req.json<IRewriteRule>();
  const newRule = await rewriteModule.addRule(rule);
  return c.json(newRule, 201);
});

app.delete('/rewrite/rules/:pattern', async (c) => {
  await rewriteModule.removeRule(c.req.param('pattern'));
  return c.json({ success: true });
});

app.post('/rewrite/flush', async (c) => {
  await rewriteModule.flushRules();
  return c.json({ success: true });
});

export default app;