import { ITaxonomyModule, ITerm, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

// Reusing the PostgresClient interface from PostModule
interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class TaxonomyModule implements ITaxonomyModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async createTerm(taxonomy: string, data: Partial<ITerm>): Promise<ITerm> {
    try {
      const params = {
        term_id: 0, // Indicates insert
        taxonomy,
        name: data.name,
        slug: data.slug,
        parent_id: data.parentId ? parseInt(data.parentId, 10) : undefined,
      };

      const result = await this.pg.fx('cms.term__upsert', params);
      return this.mapTermResult(result);
    } catch (error) {
      throw new Error(`Failed to create term in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async getTerm(taxonomy: string, id: string): Promise<ITerm | null> {
    try {
      const result = await this.pg.fx('cms.term__get', { term_id: id });
      return result && result.taxonomy === taxonomy ? this.mapTermResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch term ${id} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async getTermBySlug(taxonomy: string, slug: string): Promise<ITerm | null> {
    try {
      const result = await this.pg.fx('cms.term__get_by_slug', { slug });
      return result && result.taxonomy === taxonomy ? this.mapTermResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch term by slug ${slug} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async updateTerm(taxonomy: string, id: string, data: Partial<ITerm>): Promise<ITerm> {
    try {
      const params = {
        term_id: id,
        taxonomy,
        name: data.name,
        slug: data.slug,
        parent_id: data.parentId ? parseInt(data.parentId, 10) : undefined,
      };

      const result = await this.pg.fx('cms.term__upsert', params);
      return this.mapTermResult(result);
    } catch (error) {
      throw new Error(`Failed to update term ${id} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async deleteTerm(taxonomy: string, id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.term__delete', { term_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
      // Note: Taxonomy check not enforced here; DB should handle constraints
    } catch (error) {
      throw new Error(`Failed to delete term ${id} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async listTerms(taxonomy: string, query: IQuery): Promise<ITerm[]> {
    try {
      const params = {
        taxonomy,
        page: query.page,
        limit: query.limit,
      };

      const result = await this.pg.fx('cms.term__list', params);
      return Array.isArray(result) ? result.map(this.mapTermResult) : [];
    } catch (error) {
      throw new Error(`Failed to list terms in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async getPostTerms(postId: string, taxonomy: string): Promise<ITerm[]> {
    try {
      const result = await this.pg.fx('cms.post_term__get', { post_id: postId, taxonomy });
      return Array.isArray(result) ? result.map(this.mapTermResult) : [];
    } catch (error) {
      throw new Error(`Failed to fetch terms for post ${postId} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  async setPostTerms(postId: string, taxonomy: string, termIds: string[]): Promise<void> {
    try {
      const params = {
        post_id: postId,
        taxonomy,
        term_ids: termIds.map(id => parseInt(id, 10)), // Convert to array of numbers
      };

      const result = await this.pg.fx('cms.post_term__set', params);
      if (!result.success) {
        throw new Error('Setting post terms failed');
      }
    } catch (error) {
      throw new Error(`Failed to set terms for post ${postId} in taxonomy ${taxonomy}: ${error.message}`);
    }
  }

  // Helper method to map DB results to ITerm
  private mapTermResult(result: any): ITerm {
    return {
      id: result.term_id.toString(),
      taxonomy: result.taxonomy,
      name: result.name,
      slug: result.slug,
      parentId: result.parent_id ? result.parent_id.toString() : undefined,
    };
  }
}

export default TaxonomyModule;