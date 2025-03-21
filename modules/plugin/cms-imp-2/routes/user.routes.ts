import { Hono } from 'hono';
import UserModule from '../modules/user.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const userModule = new UserModule(pgClient);

app.post('/users', async (c) => {
  const data = await c.req.json<Partial<IUser>>();
  const user = await userModule.create(data);
  return c.json(user, 201);
});

app.get('/users/:id', async (c) => {
  const user = await userModule.get(c.req.param('id'));
  return user ? c.json(user) : c.json({ error: 'Not found' }, 404);
});

app.get('/users/username/:username', async (c) => {
  const user = await userModule.getByUsername(c.req.param('username'));
  return user ? c.json(user) : c.json({ error: 'Not found' }, 404);
});

app.put('/users/:id', async (c) => {
  const data = await c.req.json<Partial<IUser>>();
  const user = await userModule.update(c.req.param('id'), data);
  return c.json(user);
});

app.delete('/users/:id', async (c) => {
  await userModule.delete(c.req.param('id'));
  return c.json({ success: true });
});

app.get('/users', async (c) => {
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
    filters: c.req.query('filters') ? JSON.parse(c.req.query('filters')) : undefined,
  };
  const users = await userModule.list(query);
  return c.json(users);
});

app.post('/users/authenticate', async (c) => {
  const { username, password } = await c.req.json<{ username: string; password: string }>();
  const user = await userModule.authenticate(username, password);
  return user ? c.json(user) : c.json({ error: 'Authentication failed' }, 401);
});

app.get('/users/current', async (c) => {
  const user = await userModule.getCurrentUser();
  return user ? c.json(user) : c.json({ error: 'Not authenticated' }, 401);
});

app.put('/users/:id/status', async (c) => {
  const { status } = await c.req.json<{ status: IUser['status'] }>();
  await userModule.setStatus(c.req.param('id'), status);
  return c.json({ success: true });
});

app.post('/users/:id/block', async (c) => {
  await userModule.block(c.req.param('id'));
  return c.json({ success: true });
});

app.post('/users/:id/unblock', async (c) => {
  await userModule.unblock(c.req.param('id'));
  return c.json({ success: true });
});

export default app;