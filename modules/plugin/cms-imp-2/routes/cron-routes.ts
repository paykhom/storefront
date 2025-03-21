import { Hono } from 'hono';
import CronModule from '../modules/cron.module';

const app = new Hono();
const pgClient = { fx: async (fn: string, params: any) => { /* Mock or real DB call */ } }; // Replace with real client
const cronModule = new CronModule(pgClient);

app.post('/cron/schedule', async (c) => {
  const data = await c.req.json<ICronEvent>();
  const eventId = await cronModule.scheduleEvent({
    ...data,
    timestamp: new Date(data.timestamp), // Ensure timestamp is a Date object
  });
  return c.json({ eventId }, 201);
});

app.delete('/cron/unschedule', async (c) => {
  const { hook, args } = await c.req.json<{ hook: string; args?: Record<string, any> }>();
  await cronModule.unscheduleEvent(hook, args);
  return c.json({ success: true });
});

app.get('/cron/next/:hook', async (c) => {
  const hook = c.req.param('hook');
  const args = c.req.query('args') ? JSON.parse(c.req.query('args')) : undefined;
  const nextScheduled = await cronModule.getNextScheduled(hook, args);
  return nextScheduled ? c.json({ timestamp: nextScheduled }) : c.json({ timestamp: null });
});

export default app;