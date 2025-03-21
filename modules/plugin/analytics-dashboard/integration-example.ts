import { Hono } from 'hono';
import PluginManager from '../framework/pluginManager';
import { AnalyticsDashboard } from './analyticsDashboard';

const engine = new Hono();
const pluginManager = new PluginManager(engine);

const analytics = new AnalyticsDashboard();
analytics.onLifecycleEvent('onDidInitialize', () => console.log('Analytics Initialized'));
analytics.addFilter('dashboardData', (data: AnalyticsData[]) => data.filter(d => d.category === 'Request'), 20);
pluginManager.register(analytics, { enabled: true, priority: 6, debug: true });
pluginManager.initializeAll();

engine.get('/test', (c) => c.text('Hello'));

export default engine;