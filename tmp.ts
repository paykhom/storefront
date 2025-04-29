import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, Bun + Hono!'));

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});

console.log('Server running on http://localhost:3000');