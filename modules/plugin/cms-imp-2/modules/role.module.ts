import { IRoleModule, IRole, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class RoleModule implements IRoleModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async create(data: Partial<IRole>): Promise<IRole> {
    try {
      const params = {
        role_id: 0, // Indicates insert
        name: data.name,
        capabilities: data.capabilities ? JSON.stringify(data.capabilities) : undefined,
      };

      const result = await this.pg.fx('cms.role__upsert', params);
      return this.mapRoleResult(result);
    } catch (error) {
      throw new Error(`Failed to create role: ${error.message}`);
    }
  }

  async get(id: string): Promise<IRole | null> {
    try {
      const result = await this.pg.fx('cms.role__fetch', { role_id: id });
      return result ? this.mapRoleResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch role ${id}: ${error.message}`);
    }
  }

  async update(id: string, data: Partial<IRole>): Promise<IRole> {
    try {
      const params = {
        role_id: id,
        name: data.name,
        capabilities: data.capabilities ? JSON.stringify(data.capabilities) : undefined,
      };

      const result = await this.pg.fx('cms.role__upsert', params);
      return this.mapRoleResult(result);
    } catch (error) {
      throw new Error(`Failed to update role ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.role__delete', { role_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete role ${id}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IRole[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
      };

      const result = await this.pg.fx('cms.role__list', params);
      return Array.isArray(result) ? result.map(this.mapRoleResult) : [];
    } catch (error) {
      throw new Error(`Failed to list roles: ${error.message}`);
    }
  }

  async addCapability(id: string, capability: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.role__add_capability', { role_id: id, capability });
      if (!result.success) {
        throw new Error('Add capability failed');
      }
    } catch (error) {
      throw new Error(`Failed to add capability to role ${id}: ${error.message}`);
    }
  }

  async removeCapability(id: string, capability: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.role__remove_capability', { role_id: id, capability });
      if (!result.success) {
        throw new Error('Remove capability failed');
      }
    } catch (error) {
      throw new Error(`Failed to remove capability from role ${id}: ${error.message}`);
    }
  }

  async hasCapability(userId: string, capability: string): Promise<boolean> {
    try {
      const result = await this.pg.fx('cms.role__has_capability', { user_id: userId, capability });
      return result.has_capability || false;
    } catch (error) {
      throw new Error(`Failed to check capability ${capability} for user ${userId}: ${error.message}`);
    }
  }

  // Helper method to map DB results to IRole
  private mapRoleResult(result: any): IRole {
    return {
      id: result.role_id.toString(),
      name: result.name,
      capabilities: result.capabilities ? JSON.parse(result.capabilities) : [],
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
    };
  }
}

export default RoleModule;