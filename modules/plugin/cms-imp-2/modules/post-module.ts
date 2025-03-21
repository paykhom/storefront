import { IPostModule, IPost, IRevision, IQuery, IMedia } from '../interfaces/cms.interfaces'; // Adjust path as needed

// Assuming a Postgres client type (simplified)
interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class PostModule implements IPostModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async create(data: Partial<IPost>): Promise<IPost> {
    try {
      const params = {
        post_id: 0, // Indicates insert
        slug: data.slug,
        title: data.title,
        content: data.content,
        status: data.status || 'draft',
        featured_image_id: data.featuredImageId,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
        user_id: data.user_id, // Assuming user_id is added to IPost
      };

      const result = await this.pg.fx('cms.post__upsert', params);
      return this.mapPostResult(result);
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  }

  async get(id: string): Promise<IPost | null> {
    try {
      const result = await this.pg.fx('cms.post__fetch', { post_id: id });
      return result ? this.mapPostResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch post ${id}: ${error.message}`);
    }
  }

  async getBySlug(slug: string): Promise<IPost | null> {
    try {
      const result = await this.pg.fx('cms.post__get_by_slug', { slug });
      return result ? this.mapPostResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch post by slug ${slug}: ${error.message}`);
    }
  }

  async update(id: string, data: Partial<IPost>): Promise<IPost> {
    try {
      const params = {
        post_id: id,
        slug: data.slug,
        title: data.title,
        content: data.content,
        status: data.status,
        featured_image_id: data.featuredImageId,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
        user_id: data.user_id,
      };

      const result = await this.pg.fx('cms.post__upsert', params);
      return this.mapPostResult(result);
    } catch (error) {
      throw new Error(`Failed to update post ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__delete', { post_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete post ${id}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IPost[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
        filters: query.filters ? JSON.stringify(query.filters) : undefined,
      };

      const result = await this.pg.fx('cms.post__list', params);
      return Array.isArray(result) ? result.map(this.mapPostResult) : [];
    } catch (error) {
      throw new Error(`Failed to list posts: ${error.message}`);
    }
  }

  async getRevisions(postId: string): Promise<IRevision[]> {
    try {
      const result = await this.pg.fx('cms.post__get_revisions', { post_id: postId });
      return Array.isArray(result) ? result.map(this.mapRevisionResult) : [];
    } catch (error) {
      throw new Error(`Failed to fetch revisions for post ${postId}: ${error.message}`);
    }
  }

  async restoreRevision(revisionId: string): Promise<IPost> {
    try {
      const result = await this.pg.fx('cms.post__restore_revision', { revision_id: revisionId });
      return this.get(result.post_id); // Fetch updated post
    } catch (error) {
      throw new Error(`Failed to restore revision ${revisionId}: ${error.message}`);
    }
  }

  async setFeaturedImage(postId: string, mediaId: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__set_featured_image', { post_id: postId, media_id: mediaId });
      if (!result.success) {
        throw new Error('Set featured image failed');
      }
    } catch (error) {
      throw new Error(`Failed to set featured image for post ${postId}: ${error.message}`);
    }
  }

  async getFeaturedImage(postId: string): Promise<IMedia | null> {
    try {
      const result = await this.pg.fx('cms.post__get_featured_image', { post_id: postId });
      return result.media_id ? this.mapMediaResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to get featured image for post ${postId}: ${error.message}`);
    }
  }

  async setStatus(id: string, status: IPost['status']): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__upsert', { post_id: id, status });
      if (!result.post_id) {
        throw new Error('Status update failed');
      }
    } catch (error) {
      throw new Error(`Failed to set status for post ${id}: ${error.message}`);
    }
  }

  async approve(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__approve', { post_id: id });
      if (!result.success) {
        throw new Error('Approval failed');
      }
    } catch (error) {
      throw new Error(`Failed to approve post ${id}: ${error.message}`);
    }
  }

  async unapprove(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__unapprove', { post_id: id });
      if (!result.success) {
        throw new Error('Unapproval failed');
      }
    } catch (error) {
      throw new Error(`Failed to unapprove post ${id}: ${error.message}`);
    }
  }

  async markAsSpam(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__upsert', { post_id: id, status: 'spam' });
      if (!result.post_id) {
        throw new Error('Mark as spam failed');
      }
    } catch (error) {
      throw new Error(`Failed to mark post ${id} as spam: ${error.message}`);
    }
  }

  async unmarkAsSpam(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.post__unmark_as_spam', { post_id: id });
      if (!result.success) {
        throw new Error('Unmark as spam failed');
      }
    } catch (error) {
      throw new Error(`Failed to unmark post ${id} as spam: ${error.message}`);
    }
  }

  // Helper methods to map DB results to TypeScript types
  private mapPostResult(result: any): IPost {
    return {
      id: result.post_id.toString(),
      slug: result.slug,
      title: result.title,
      content: result.content,
      status: result.status,
      featuredImageId: result.featured_image_id?.toString(),
      metadata: result.metadata ? JSON.parse(result.metadata) : {},
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
      user_id: result.user_id.toString(), // Added to match DB
    };
  }

  private mapRevisionResult(result: any): IRevision {
    return {
      id: result.revision_id.toString(),
      postId: result.post_id.toString(),
      content: result.content,
      metadata: result.metadata ? JSON.parse(result.metadata) : {},
      createdAt: new Date(result.created_at),
    };
  }

  private mapMediaResult(result: any): IMedia {
    return {
      id: result.media_id.toString(),
      url: result.url,
      filename: result.filename,
      mimeType: result.mime_type,
      metadata: result.metadata ? JSON.parse(result.metadata) : {},
      uploadedAt: new Date(result.uploaded_at),
    };
  }
}

export default PostModule;