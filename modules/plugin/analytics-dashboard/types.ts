// src/plugins/analyticsDashboard/types.ts
export interface AnalyticsData {
    timestamp: string;
    category: string;
    action: string;
    label?: string;
    value?: number;
  }
  
  export interface DashboardConfig {
    refreshInterval: number; // seconds
    chartType: 'line' | 'bar' | 'pie';
  }