// src/plugins/jetpackTools/types.ts
export interface SecurityLog {
    ip: string;
    action: 'block' | 'unblock';
    timestamp: string;
  }
  
  export interface AnalyticsEvent {
    category: string;
    action: string;
    label?: string;
    value?: number;
    timestamp: string;
  }
  
