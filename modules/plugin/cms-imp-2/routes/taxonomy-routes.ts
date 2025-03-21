import { Hono } from 'hono';
import TaxonomyModule from '../modules/taxonomy.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const taxonomyModule = new TaxonomyModule(pgClient);

app.post('/taxonomy/:taxonomy/terms', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  const data = await c.req.json<Partial<ITerm>>();
  const term = await taxonomyModule.createTerm(taxonomy, data);
  return c.json(term, 201);
});

app.get('/taxonomy/:taxonomy/terms/:id', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  const term = await taxonomyModule.getTerm(taxonomy, c.req.param('id'));
  return term ? c.json(term) : c.json({ error: 'Not found' }, 404);
});

app.get('/taxonomy/:taxonomy/terms/slug/:slug', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  const term = await taxonomyModule.getTermBySlug(taxonomy, c.req.param('slug'));
  return term ? c.json(term) : c.json({ error: 'Not found' }, 404);
});

app.put('/taxonomy/:taxonomy/terms/:id', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  const data = await c.req.json<Partial<ITerm>>();
  const term = await taxonomyModule.updateTerm(taxonomy, c.req.param('id'), data);
  return c.json(term);
});

app.delete('/taxonomy/:taxonomy/terms/:id', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  await taxonomyModule.deleteTerm(taxonomy, c.req.param('id'));
  return c.json({ success: true });
});

app.get('/taxonomy/:taxonomy/terms', async (c) => {
  const taxonomy = c.req.param('taxonomy');
  const query: IQuery = {
    page: parseInt(c.req.query('page') || '1', 10),
    limit: parseInt(c.req.query('limit') || '10', 10),
  };
  const terms = await taxonomyModule.listTerms(taxonomy, query);
  return c.json(terms);
});

app.get('/posts/:postId/taxonomy/:taxonomy/terms', async (c) => {
  const postId = c.req.param('postId');
  const taxonomy = c.req.param('taxonomy');
  const terms = await taxonomyModule.getPostTerms(postId, taxonomy);
  return c.json(terms);
});

app.put('/posts/:postId/taxonomy/:taxonomy/terms', async (c) => {
  const postId = c.req.param('postId');
  const taxonomy = c.req.param('taxonomy');
  const { termIds } = await c.req.json<{ termIds: string[] }>();
  await taxonomyModule.setPostTerms(postId, taxonomy, termIds);
  return c.json({ success: true });
});

export default app;