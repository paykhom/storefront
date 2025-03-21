import { ICronModule, ICronEvent } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class CronModule implements ICronModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async scheduleEvent(event: ICronEvent): Promise<string> {
    try {
      const params = {
        timestamp: Math.floor(event.timestamp.getTime() / 1000), // Convert Date to Unix timestamp
        hook: event.hook,
        args: event.args ? JSON.stringify(event.args) : undefined,
      };

      const result = await this.pg.fx('cms.cron__schedule_event', params);
      return result.cron_id.toString();
    } catch (error) {
      throw new Error(`Failed to schedule cron event: ${error.message}`);
    }
  }

  async unscheduleEvent(hook: string, args?: Record<string, any>): Promise<void> {
    try {
      const params = {
        hook,
        args: args ? JSON.stringify(args) : undefined,
      };

      const result = await this.pg.fx('cms.cron__unschedule_event', params);
      if (!result.success) {
        throw new Error('Unschedule failed');
      }
    } catch (error) {
      throw new Error(`Failed to unschedule cron event for hook ${hook}: ${error.message}`);
    }
  }

  async getNextScheduled(hook: string, args?: Record<string, any>): Promise<Date | null> {
    try {
      const params = {
        hook,
        args: args ? JSON.stringify(args) : undefined,
      };

      const result = await this.pg.fx('cms.cron__get_next_scheduled', params);
      return result.timestamp ? new Date(result.timestamp * 1000) : null; // Convert Unix timestamp to Date
    } catch (error) {
      throw new Error(`Failed to get next scheduled time for hook ${hook}: ${error.message}`);
    }
  }
}

export default CronModule;