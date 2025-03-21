import { Hono } from 'hono';
import AdminModule from '../modules/admin-module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const adminModule = new AdminModule(pgClient);

app.get('/admin/stats', async (c) => {
  const stats = await adminModule.getDashboardStats();
  return c.json(stats);
});

app.get('/admin/notices', async (c) => {
  const notices = await adminModule.getAdminNotices();
  return c.json(notices);
});

app.post('/admin/cache/clear', async (c) => {
  await adminModule.clearCache();
  return c.json({ success: true });
});

export default app;