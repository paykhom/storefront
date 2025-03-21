import { IAdminModule, IDashboardStats, IAdminNotice } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class AdminModule implements IAdminModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async getDashboardStats(): Promise<IDashboardStats> {
    try {
      const result = await this.pg.fx('cms.admin__get_dashboard_stats', {});
      return {
        users: result.users,
        posts: result.posts,
        comments: result.comments,
      };
    } catch (error) {
      throw new Error(`Failed to fetch dashboard stats: ${error.message}`);
    }
  }

  async getAdminNotices(): Promise<IAdminNotice[]> {
    try {
      const result = await this.pg.fx('cms.admin__get_admin_notices', {});
      return Array.isArray(result) ? result.map(this.mapNoticeResult) : [];
    } catch (error) {
      throw new Error(`Failed to fetch admin notices: ${error.message}`);
    }
  }

  async clearCache(): Promise<void> {
    try {
      const result = await this.pg.fx('cms.admin__clear_cache', {});
      if (!result.success) {
        throw new Error('Cache clear failed');
      }
    } catch (error) {
      throw new Error(`Failed to clear cache: ${error.message}`);
    }
  }

  // Helper method to map DB results to IAdminNotice
  private mapNoticeResult(result: any): IAdminNotice {
    return {
      id: result.id.toString(),
      message: result.message,
      type: result.type,
    };
  }
}

export default AdminModule;