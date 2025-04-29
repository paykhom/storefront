import { Hono } from 'hono';
import { Database } from './tmp-db';

const app = new Hono();

app.get('/', async (c) => {
  const res = await Database.query('SELECT NOW()');
  return c.text(`Hello, Bun + Hono! Time: ${res.rows[0].now}`);
});

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});

console.log('Server running on http://localhost:3000');