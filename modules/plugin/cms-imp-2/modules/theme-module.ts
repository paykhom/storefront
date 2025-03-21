import { IThemeModule, ITheme, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class ThemeModule implements IThemeModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async get(name: string): Promise<ITheme | null> {
    try {
      const result = await this.pg.fx('cms.theme__fetch', { name });
      return result ? this.mapThemeResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch theme ${name}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<ITheme[]> {
    try {
      const result = await this.pg.fx('cms.theme__list', {});
      return Array.isArray(result) ? result.map(this.mapThemeResult) : [];
    } catch (error) {
      throw new Error(`Failed to list themes: ${error.message}`);
    }
  }

  async getCurrent(): Promise<ITheme | null> {
    try {
      const result = await this.pg.fx('cms.theme__get_current', {});
      return result ? this.mapThemeResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch current theme: ${error.message}`);
    }
  }

  async activate(name: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.theme__activate', { name });
      if (!result.success) {
        throw new Error('Activation failed');
      }
    } catch (error) {
      throw new Error(`Failed to activate theme ${name}: ${error.message}`);
    }
  }

  async customize(name: string, settings: Record<string, any>): Promise<void> {
    try {
      const params = {
        name,
        settings: JSON.stringify(settings),
      };

      const result = await this.pg.fx('cms.theme__customize', params);
      if (!result.success) {
        throw new Error('Customization failed');
      }
    } catch (error) {
      throw new Error(`Failed to customize theme ${name}: ${error.message}`);
    }
  }

  // Helper method to map DB results to ITheme
  private mapThemeResult(result: any): ITheme {
    return {
      name: result.name,
      settings: result.settings ? JSON.parse(result.settings) : {},
      isActive: result.is_active,
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
    };
  }
}

export default ThemeModule;