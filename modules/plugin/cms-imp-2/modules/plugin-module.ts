import { IPluginModule, IPlugin, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class PluginModule implements IPluginModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async get(slug: string): Promise<IPlugin | null> {
    try {
      const result = await this.pg.fx('cms.plugin__fetch', { slug });
      return result ? this.mapPluginResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch plugin ${slug}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IPlugin[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
      };

      const result = await this.pg.fx('cms.plugin__list', params);
      return Array.isArray(result) ? result.map(this.mapPluginResult) : [];
    } catch (error) {
      throw new Error(`Failed to list plugins: ${error.message}`);
    }
  }

  async activate(slug: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.plugin__activate', { slug });
      if (!result.success) {
        throw new Error('Activation failed');
      }
    } catch (error) {
      throw new Error(`Failed to activate plugin ${slug}: ${error.message}`);
    }
  }

  async deactivate(slug: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.plugin__deactivate', { slug });
      if (!result.success) {
        throw new Error('Deactivation failed');
      }
    } catch (error) {
      throw new Error(`Failed to deactivate plugin ${slug}: ${error.message}`);
    }
  }

  async install(data: Partial<IPlugin>): Promise<IPlugin> {
    try {
      const params = {
        slug: data.slug,
        name: data.name,
        version: data.version,
        config: data.config ? JSON.stringify(data.config) : undefined,
      };

      const result = await this.pg.fx('cms.plugin__install', params);
      const installedPlugin = await this.get(result.slug);
      if (!installedPlugin) throw new Error('Installation failed to retrieve plugin');
      return installedPlugin;
    } catch (error) {
      throw new Error(`Failed to install plugin: ${error.message}`);
    }
  }

  async uninstall(slug: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.plugin__uninstall', { slug });
      if (!result.success) {
        throw new Error('Uninstallation failed');
      }
    } catch (error) {
      throw new Error(`Failed to uninstall plugin ${slug}: ${error.message}`);
    }
  }

  // Helper method to map DB results to IPlugin
  private mapPluginResult(result: any): IPlugin {
    return {
      slug: result.slug,
      name: result.name,
      version: result.version,
      isActive: result.is_active,
      config: result.config ? JSON.parse(result.config) : {},
      installedAt: new Date(result.installed_at),
      updatedAt: new Date(result.updated_at),
    };
  }
}

export default PluginModule;