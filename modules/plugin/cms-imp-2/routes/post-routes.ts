import { Hono } from 'hono';
import PostModule from '../modules/post.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const postModule = new PostModule(pgClient);

app.post('/posts', async (c) => {
  const data = await c.req.json<Partial<IPost>>();
  const post = await postModule.create(data);
  return c.json(post, 201);
});

app.get('/posts/:id', async (c) => {
  const post = await postModule.get(c.req.param('id'));
  return post ? c.json(post) : c.json({ error: 'Not found' }, 404);
});

app.get('/posts/slug/:slug', async (c) => {
  const post = await postModule.getBySlug(c.req.param('slug'));
  return post ? c.json(post) : c.json({ error: 'Not found' }, 404);
});

app.put('/posts/:id', async (c) => {
  const data = await c.req.json<Partial<IPost>>();
  const post = await postModule.update(c.req.param('id'), data);
  return c.json(post);
});

app.delete('/posts/:id', async (c) => {
  await postModule.delete(c.req.param('id'));
  return c.json({ success: true });
});

export default app;