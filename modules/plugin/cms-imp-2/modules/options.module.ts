import { IOptionsModule } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class OptionsModule implements IOptionsModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async get(key: string): Promise<any> {
    try {
      const result = await this.pg.fx('cms.options__fetch', { option_key: key });
      return result ? JSON.parse(result) : null; // Assuming option_value is JSONB
    } catch (error) {
      throw new Error(`Failed to fetch option ${key}: ${error.message}`);
    }
  }

  async update(key: string, value: any): Promise<void> {
    try {
      const params = {
        option_key: key,
        option_value: JSON.stringify(value),
      };

      const result = await this.pg.fx('cms.options__upsert', params);
      if (!result.option_key) {
        throw new Error('Update failed');
      }
    } catch (error) {
      throw new Error(`Failed to update option ${key}: ${error.message}`);
    }
  }

  async delete(key: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.options__delete', { option_key: key });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete option ${key}: ${error.message}`);
    }
  }
}

export default OptionsModule;