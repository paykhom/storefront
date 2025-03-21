// cms-plugin/app/controller/content-controller.ts
import { ContentRepository } from '../repository/content-repository'; // Import ContentRepository
import { ContentData, ContentType } from '../../core/types/cms';

// Hypothetical Validation and Utility Functions (Move to core/util)
import { validateContentData, sanitizeContentData } from '../../core/util/validation';
import { generateSlug } from '../../core/util/slug';

export class ContentController {
  constructor(private contentRepository: ContentRepository) {}

  async createContent(contentTypeId: string, contentData: ContentData): Promise<ContentData> {
    // 1. Validation
    const validationResult = validateContentData(contentTypeId, contentData);
    if (!validationResult.isValid) {
      throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`); // Or use a custom exception
    }

    // 2. Sanitization
    let sanitizedData = sanitizeContentData(contentData);

    // 3. Slug Generation
    if (!sanitizedData.slug) {
      sanitizedData.slug = generateSlug(sanitizedData.title);
    }

    // 4. Apply Default Values
    sanitizedData = { ...sanitizedData, status: sanitizedData.status || 'draft' };

    // 5. Persist data using the repository
    return await this.contentRepository.createContent(contentTypeId, sanitizedData);
  }

  async getContent(contentTypeId: string, id: string): Promise<ContentData | null> {
    return await this.contentRepository.getContent(contentTypeId, id);
  }

  async getContents(contentTypeId: string, query: any): Promise<any> {
    return await this.contentRepository.getContents(contentTypeId, query);
  }

  async updateContent(contentTypeId: string, id: string, contentData: ContentData): Promise<ContentData> {
    // 1. Validation
    const validationResult = validateContentData(contentTypeId, contentData);
    if (!validationResult.isValid) {
      throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`); // Or use a custom exception
    }

    // 2. Sanitization
    let sanitizedData = sanitizeContentData(contentData);

    return await this.contentRepository.updateContent(contentTypeId, id, sanitizedData);
  }

  async deleteContent(contentTypeId: string, id: string): Promise<void> {
    return await this.contentRepository.deleteContent(contentTypeId, id);
  }

  async getContentType(id: string): Promise<ContentType | null> {
    return await this.contentRepository.getContentType(id);
  }

  async getContentTypes(): Promise<ContentType[]> {
    return await this.contentRepository.getContentTypes();
  }

  async createContentType(contentType: ContentType): Promise<ContentType> {
    return await this.contentRepository.createContentType(contentType);
  }

  async updateContentType(id: string, contentType: ContentType): Promise<ContentType> {
    return await this.contentRepository.updateContentType(id, contentType);
  }

  async deleteContentType(id: string): Promise<void> {
    return await this.contentRepository.deleteContentType(id);
  }
}