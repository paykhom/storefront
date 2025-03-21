// cms-pluginmodules/service/content-service.ts
import { IContentService, ContentData, ContentType } from '../../core/types/cms';
import { IContentRepository } from '../repository/content-repository';

export class ContentService implements IContentService {
    private contentRepository: IContentRepository;

    constructor(contentRepository: IContentRepository) {
        this.contentRepository = contentRepository;
    }

    // Content Type Operations
    async getContentType(id: string): Promise<ContentType | null> {
        return this.contentRepository.getContentType(id);
    }

    async getContentTypes(): Promise<ContentType[]> {
        return this.contentRepository.getContentTypes();
    }

    async createContentType(contentType: ContentType): Promise<ContentType> {
        return this.contentRepository.createContentType(contentType);
    }

    async updateContentType(id: string, contentType: ContentType): Promise<ContentType> {
        return this.contentRepository.updateContentType(id, contentType);
    }

    async deleteContentType(id: string): Promise<void> {
        return this.contentRepository.deleteContentType(id);
    }

    // Generic Content Operations
    async getContent(contentTypeId: string, id: string): Promise<ContentData | null> {
        return this.contentRepository.getContent(contentTypeId, id);
    }

    async getContents(contentTypeId: string, query: any): Promise<any> {
        return this.contentRepository.getContents(contentTypeId, query);
    }

    async createContent(contentTypeId: string, data: ContentData): Promise<ContentData> {
        // Apply 'cms.content.beforeCreate' filter (generic)
        const filteredData = this.applyFilters<ContentData>('cms.content.beforeCreate', data);

        const createdContent = await this.contentRepository.createContent(contentTypeId, filteredData);
        // Emit 'cms.content.created' event (generic)
        this.emitAction('cms.content.created', { contentTypeId: contentTypeId, contentId: createdContent.id });
        return createdContent;
    }

    async updateContent(contentTypeId: string, id: string, data: ContentData): Promise<ContentData> {
        // Apply 'cms.content.beforeUpdate' filter (generic)
        const filteredData = this.applyFilters<ContentData>('cms.content.beforeUpdate', data);
        const updatedContent = await this.contentRepository.updateContent(contentTypeId, id, filteredData);
        // Emit 'cms.content.updated' event (generic)
        this.emitAction('cms.content.updated', { contentTypeId: contentTypeId, contentId: updatedContent.id });
        return updatedContent;
    }

    async deleteContent(contentTypeId: string, id: string): Promise<void> {
        await this.contentRepository.deleteContent(contentTypeId, id);
        // Emit 'cms.content.deleted' event (generic)
        this.emitAction('cms.content.deleted', { contentTypeId: contentTypeId, contentId: id });
    }
}