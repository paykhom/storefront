import { Hono } from 'hono';
import MediaModule from '../modules/media.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const mediaModule = new MediaModule(pgClient);

app.post('/media', async (c) => {
  const data = await c.req.json<Partial<IMedia>>();
  const media = await mediaModule.upload(data);
  return c.json(media, 201);
});

app.get('/media/:id', async (c) => {
  const media = await mediaModule.get(c.req.param('id'));
  return media ? c.json(media) : c.json({ error: 'Not found' }, 404);
});

app.put('/media/:id', async (c) => {
  const data = await c.req.json<Partial<IMedia>>();
  const media = await mediaModule.update(c.req.param('id'), data);
  return c.json(media);
});

app.delete('/media/:id', async (c) => {
  await mediaModule.delete(c.req.param('id'));
  return c.json({ success: true });
});

app.get('/media', async (c) => {
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
    filters: c.req.query('filters') ? JSON.parse(c.req.query('filters')) : undefined,
  };
  const mediaItems = await mediaModule.list(query);
  return c.json(mediaItems);
});

app.get('/media/:id/metadata', async (c) => {
  const metadata = await mediaModule.getAttachmentMetadata(c.req.param('id'));
  return c.json(metadata);
});

export default app;