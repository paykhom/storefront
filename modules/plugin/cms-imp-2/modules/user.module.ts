import { IUserModule, IUser, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class UserModule implements IUserModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async create(data: Partial<IUser>): Promise<IUser> {
    try {
      const params = {
        user_id: 0, // Indicates insert
        username: data.username,
        email: data.email,
        password_hash: data.passwordHash,
        status: data.status || 'active',
        roles: data.roles ? JSON.stringify(data.roles) : undefined,
      };

      const result = await this.pg.fx('cms.user__upsert', params);
      return this.mapUserResult(result);
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }

  async get(id: string): Promise<IUser | null> {
    try {
      const result = await this.pg.fx('cms.user__get', { user_id: id });
      return result ? this.mapUserResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch user ${id}: ${error.message}`);
    }
  }

  async getByUsername(username: string): Promise<IUser | null> {
    try {
      const result = await this.pg.fx('cms.user__get_by_username', { username });
      return result ? this.mapUserResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch user by username ${username}: ${error.message}`);
    }
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser> {
    try {
      const params = {
        user_id: id,
        username: data.username,
        email: data.email,
        password_hash: data.passwordHash,
        status: data.status,
        roles: data.roles ? JSON.stringify(data.roles) : undefined,
      };

      const result = await this.pg.fx('cms.user__upsert', params);
      return this.mapUserResult(result);
    } catch (error) {
      throw new Error(`Failed to update user ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.user__delete', { user_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete user ${id}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IUser[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
        filters: query.filters ? JSON.stringify(query.filters) : undefined,
      };

      const result = await this.pg.fx('cms.user__list', params);
      return Array.isArray(result) ? result.map(this.mapUserResult) : [];
    } catch (error) {
      throw new Error(`Failed to list users: ${error.message}`);
    }
  }

  async authenticate(username: string, password: string): Promise<IUser | null> {
    try {
      const result = await this.pg.fx('cms.user__authenticate', { username, password_hash: password });
      return result ? this.mapUserResult(result) : null;
    } catch (error) {
      throw new Error(`Authentication failed for ${username}: ${error.message}`);
    }
  }

  async getCurrentUser(): Promise<IUser | null> {
    try {
      // Assuming user_id is provided via context (e.g., JWT); placeholder here
      const userId = '1'; // Replace with actual context retrieval
      const result = await this.pg.fx('cms.user__get_current', { user_id: userId });
      return result ? this.mapUserResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch current user: ${error.message}`);
    }
  }

  async setStatus(id: string, status: IUser['status']): Promise<void> {
    try {
      const result = await this.pg.fx('cms.user__set_status', { user_id: id, status });
      if (!result.success) {
        throw new Error('Status update failed');
      }
    } catch (error) {
      throw new Error(`Failed to set status for user ${id}: ${error.message}`);
    }
  }

  async block(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.user__block', { user_id: id });
      if (!result.success) {
        throw new Error('Block failed');
      }
    } catch (error) {
      throw new Error(`Failed to block user ${id}: ${error.message}`);
    }
  }

  async unblock(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.user__unblock', { user_id: id });
      if (!result.success) {
        throw new Error('Unblock failed');
      }
    } catch (error) {
      throw new Error(`Failed to unblock user ${id}: ${error.message}`);
    }
  }

  // Helper method to map DB results to IUser
  private mapUserResult(result: any): IUser {
    return {
      id: result.user_id.toString(),
      username: result.username,
      email: result.email,
      passwordHash: result.password_hash,
      status: result.status,
      roles: result.roles ? JSON.parse(result.roles) : [],
      createdAt: new Date(result.created_at),
    };
  }
}

export default UserModule;