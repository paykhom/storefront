import { Hono } from 'hono';
import CommentModule from '../modules/comment.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const commentModule = new CommentModule(pgClient);

app.post('/comments', async (c) => {
  const data = await c.req.json<Partial<IComment>>();
  const comment = await commentModule.create(data);
  return c.json(comment, 201);
});

app.get('/comments/:id', async (c) => {
  const comment = await commentModule.get(c.req.param('id'));
  return comment ? c.json(comment) : c.json({ error: 'Not found' }, 404);
});

app.put('/comments/:id', async (c) => {
  const data = await c.req.json<Partial<IComment>>();
  const comment = await commentModule.update(c.req.param('id'), data);
  return c.json(comment);
});

app.delete('/comments/:id', async (c) => {
  await commentModule.delete(c.req.param('id'));
  return c.json({ success: true });
});

app.get('/comments', async (c) => {
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
    filters: c.req.query('filters') ? JSON.parse(c.req.query('filters')) : undefined,
  };
  const comments = await commentModule.list(query);
  return c.json(comments);
});

app.post('/comments/:id/approve', async (c) => {
  await commentModule.approve(c.req.param('id'));
  return c.json({ success: true });
});

app.post('/comments/:id/unapprove', async (c) => {
  await commentModule.unapprove(c.req.param('id'));
  return c.json({ success: true });
});

app.post('/comments/:id/spam', async (c) => {
  await commentModule.markAsSpam(c.req.param('id'));
  return c.json({ success: true });
});

app.post('/comments/:id/unspam', async (c) => {
  await commentModule.unmarkAsSpam(c.req.param('id'));
  return c.json({ success: true });
});

export default app;