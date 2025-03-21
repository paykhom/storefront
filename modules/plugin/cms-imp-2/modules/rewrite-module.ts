import { IRewriteModule, IRewriteRule } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class RewriteModule implements IRewriteModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async addRule(rule: IRewriteRule): Promise<IRewriteRule> {
    try {
      const params = {
        pattern: rule.pattern,
        redirect: rule.redirect,
      };

      const result = await this.pg.fx('cms.rewrite__add_rule', params);
      return {
        id: result.rewrite_id.toString(),
        pattern: result.pattern,
        redirect: rule.redirect, // DB returns pattern, not redirect; use input for consistency
      };
    } catch (error) {
      throw new Error(`Failed to add rewrite rule: ${error.message}`);
    }
  }

  async removeRule(pattern: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.rewrite__remove_rule', { pattern });
      if (!result.success) {
        throw new Error('Removal failed');
      }
    } catch (error) {
      throw new Error(`Failed to remove rewrite rule for pattern ${pattern}: ${error.message}`);
    }
  }

  async flushRules(): Promise<void> {
    try {
      const result = await this.pg.fx('cms.rewrite__flush_rules', {});
      if (!result.success) {
        throw new Error('Flush failed');
      }
    } catch (error) {
      throw new Error(`Failed to flush rewrite rules: ${error.message}`);
    }
  }
}

export default RewriteModule;