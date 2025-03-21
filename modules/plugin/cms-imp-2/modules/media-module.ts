import { IMediaModule, IMedia, IQuery } from '../interfaces/cms.interfaces'; // Adjust path as needed

interface PostgresClient {
  fx(functionName: string, params: Record<string, any>): Promise<any>;
}

class MediaModule implements IMediaModule {
  private pg: PostgresClient;

  constructor(pgClient: PostgresClient) {
    this.pg = pgClient;
  }

  async upload(data: Partial<IMedia>): Promise<IMedia> {
    try {
      const params = {
        url: data.url,
        filename: data.filename,
        mime_type: data.mimeType,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
        user_id: data.userId ? parseInt(data.userId, 10) : undefined, // Assuming userId is added to IMedia
      };

      const result = await this.pg.fx('cms.media__upload', params);
      return this.mapMediaResult(result);
    } catch (error) {
      throw new Error(`Failed to upload media: ${error.message}`);
    }
  }

  async get(id: string): Promise<IMedia | null> {
    try {
      const result = await this.pg.fx('cms.media__fetch', { media_id: id });
      return result ? this.mapMediaResult(result) : null;
    } catch (error) {
      throw new Error(`Failed to fetch media ${id}: ${error.message}`);
    }
  }

  async update(id: string, data: Partial<IMedia>): Promise<IMedia> {
    try {
      const params = {
        media_id: id,
        url: data.url,
        filename: data.filename,
        metadata: data.metadata ? JSON.stringify(data.metadata) : undefined,
        user_id: data.userId ? parseInt(data.userId, 10) : undefined,
      };

      const result = await this.pg.fx('cms.media__update', params);
      const updatedMedia = await this.get(result.media_id); // Fetch full updated record
      if (!updatedMedia) throw new Error('Update failed to retrieve media');
      return updatedMedia;
    } catch (error) {
      throw new Error(`Failed to update media ${id}: ${error.message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const result = await this.pg.fx('cms.media__delete', { media_id: id });
      if (!result.success) {
        throw new Error('Deletion failed');
      }
    } catch (error) {
      throw new Error(`Failed to delete media ${id}: ${error.message}`);
    }
  }

  async list(query: IQuery): Promise<IMedia[]> {
    try {
      const params = {
        page: query.page,
        limit: query.limit,
        filters: query.filters ? JSON.stringify(query.filters) : undefined,
      };

      const result = await this.pg.fx('cms.media__list', params);
      return Array.isArray(result) ? result.map(this.mapMediaResult) : [];
    } catch (error) {
      throw new Error(`Failed to list media: ${error.message}`);
    }
  }

  async getAttachmentMetadata(id: string): Promise<Record<string, any>> {
    try {
      const result = await this.pg.fx('cms.media__get_attachment_metadata', { media_id: id });
      return result ? JSON.parse(result) : {};
    } catch (error) {
      throw new Error(`Failed to fetch metadata for media ${id}: ${error.message}`);
    }
  }

  // Helper method to map DB results to IMedia
  private mapMediaResult(result: any): IMedia {
    return {
      id: result.media_id.toString(),
      url: result.url,
      filename: result.filename,
      mimeType: result.mime_type,
      metadata: result.metadata ? JSON.parse(result.metadata) : {},
      uploadedAt: new Date(result.uploaded_at),
      userId: result.user_id?.toString(), // Added to match DB
    };
  }
}

export default MediaModule;