import { ICommentModule, IComment, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class CommentModule implements ICommentModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async create(data: Partial<IComment>): Promise<IComment> {
    try {
      const params = {
        comment_id: 0, // Indicates insert
        post_id: data.postId ? parseInt(data.postId, 10) : undefined,
        content: data.content,
        author_id: data.authorId ? parseInt(data.authorId, 10) : undefined,
        status: data.status || 'pending',
      };

      const result = await this.pg.fx('cms.comment__upsert', params);
      return this.mapCommentResult(result);
    } catch (error) {
      throw new Error(`Failed to create comment: ${error.message}`);
    }
  }

  async get(id: string): Promise<IComment | null> {
    try {
      const result = await this.pg.fx('cms.comment__fetch', { comment_id: id });
      return result ? this.mapCommentResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch comment ${id}: ${error.message}`);
    }
  }

  async update(id: string, data: Partial<IComment>): Promise<IComment> {
    try {
      const params = {
        comment_id: id,
        post_id: data.postId ? parseInt(data.postId, 10) : undefined,
        content: data.content,
        author_id: data.authorId ? parseInt(data.authorId, 10) : undefined,
        status: data.status,
      };

      const result = await this.pg.fx('cms.comment__upsert', params);
      const updatedComment = await this.get(result.comment_id);
      if (!updatedComment) throw new Error('Update failed to retrieve comment');
      return updatedComment;
    } catch (error) {
      throw new Error(`Failed to update comment ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.comment__delete', { comment_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete comment ${id}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IComment[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
        filters: query.filters ? JSON.stringify(query.filters) : undefined,
      };

      const result = await this.pg.fx('cms.comment__list', params);
      return Array.isArray(result) ? result.map(this.mapCommentResult) : [];
    } catch (error) {
      throw new Error(`Failed to list comments: ${error.message}`);
    }
  }

  async approve(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.comment__approve', { comment_id: id });
      if (!result.success) {
        throw new Error('Approval failed');
      }
    } catch (error) {
      throw new Error(`Failed to approve comment ${id}: ${error.message}`);
    }
  }

  async unapprove(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.comment__unapprove', { comment_id: id });
      if (!result.success) {
        throw new Error('Unapproval failed');
      }
    } catch (error) {
      throw new Error(`Failed to unapprove comment ${id}: ${error.message}`);
    }
  }

  async markAsSpam(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.comment__mark_as_spam', { comment_id: id });
      if (!result.success) {
        throw new Error('Mark as spam failed');
      }
    } catch (error) {
      throw new Error(`Failed to mark comment ${id} as spam: ${error.message}`);
    }
  }

  async unmarkAsSpam(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.comment__unmark_as_spam', { comment_id: id });
      if (!result.success) {
        throw new Error('Unmark as spam failed');
      }
    } catch (error) {
      throw new Error(`Failed to unmark comment ${id} as spam: ${error.message}`);
    }
  }

  // Helper method to map DB results to IComment
  private mapCommentResult(result: any): IComment {
    return {
      id: result.comment_id.toString(),
      postId: result.post_id.toString(),
      content: result.content,
      authorId: result.author_id.toString(),
      status: result.status,
      createdAt: new Date(result.created_at),
      updatedAt: new Date(result.updated_at),
    };
  }
}

export default CommentModule;