// cms-pluginmodules/service/content-service.test.ts
import { ContentService } from './content-service';
import { ContentRepository } from '../repository/content-repository';
import { cmsHandlers } from '../../src/mocks/cmsHandlers'; // Import CMS mock handlers
import { setupServer } from 'msw/node';
import { ContentType, ContentData } from '../../core/types/cms';

const apiBaseUrl = '/api/cms'; // Match your API base URL

describe('ContentService', () => {
  let contentService: ContentService;
  let contentRepository: ContentRepository;

  beforeEach(() => {
    contentRepository = new ContentRepository(apiBaseUrl);
    contentService = new ContentService(contentRepository);
  });


  it('should fetch content types successfully', async () => {
    const contentTypes = await contentService.getContentTypes();

    expect(contentTypes).toBeDefined();
    expect(contentTypes.length).toBeGreaterThan(0);
  });

  it('should fetch content successfully', async () => {
      const contentTypeId = "product"
      const content = await contentService.getContents(contentTypeId, {});

      expect(content).toBeDefined();
      expect(content.data.length).toBeGreaterThan(0);
  });

    it('should create content successfully', async () => {
        const contentTypeId = "product"
        const content = await contentService.createContent(contentTypeId, {name: "Product A", description: "Description A", contentTypeId: contentTypeId});

        expect(content).toBeDefined();
        expect(content.name).toBe("Product A");
    });

    it('should update content successfully', async () => {
        const contentTypeId = "product"
        const id = "1";
        const content = await contentService.updateContent(contentTypeId, id, {name: "Product B", description: "Description B", contentTypeId: contentTypeId, id: id});

        expect(content).toBeDefined();
        expect(content.name).toBe("Product B");
    });

    it('should delete content successfully', async () => {
        const contentTypeId = "product"
        const id = "1";
        await contentService.deleteContent(contentTypeId, id);
        // Check the return value from the response.
    });
});