// cms-plugin/app/router/route-handler.ts
import { Hono } from 'hono';
import { ContentService } from '../../modules/service/content-service';
import { TaxonomyService } from '../../modules/service/taxonomy-service';
import { ContentData, CategoryData } from '../../core/types/cms';

export class RouteHandler {
    constructor(
        private contentService: ContentService,
        private taxonomyService: TaxonomyService,
        private app: Hono
    ) { }

    registerRoutes() {
        // ******************* CONTENT TYPE ROUTES *******************

        // GET /admin/cms/content-types
        this.app.get('/admin/cms/content-types', async (c) => {
            try {
                const contentTypes = await this.contentService.getContentTypes();
                return c.json({ data: contentTypes });
            } catch (error) {
                console.error("Error fetching content types:", error);
                return c.json({ error: "Failed to fetch content types" }, 500);
            }
        });

        // ******************* GENERIC CONTENT ROUTES *******************

        // GET /admin/cms/content/:contentTypeId
        this.app.get('/admin/cms/content/:contentTypeId', async (c) => {
            try {
                const contentTypeId = c.req.param('contentTypeId');
                const query = c.req.query();
                const contents = await this.contentService.getContents(contentTypeId, query);
                return c.json(contents); // Already in { data: [], total: 0 } format
            } catch (error) {
                console.error("Error fetching content:", error);
                return c.json({ error: "Failed to fetch content" }, 500);
            }
        });

        // POST /admin/cms/content/:contentTypeId
        this.app.post('/admin/cms/content/:contentTypeId', async (c) => {
            try {
                const contentTypeId = c.req.param('contentTypeId');
                const contentData = await c.req.json<ContentData>();
                const createdContent = await this.contentService.createContent(contentTypeId, contentData);
                return c.json(createdContent, 201);
            } catch (error) {
                console.error("Error creating content:", error);
                return c.json({ error: "Failed to create content" }, 400);
            }
        });

        // GET /admin/cms/content/:contentTypeId/:id
        this.app.get('/admin/cms/content/:contentTypeId/:id', async (c) => {
            try {
                const contentTypeId = c.req.param('contentTypeId');
                const id = c.req.param('id');
                const content = await this.contentService.getContent(contentTypeId, id);
                if (!content) {
                    return c.json({ error: "Content not found" }, 404);
                }
                return c.json(content);
            } catch (error) {
                console.error("Error fetching content:", error);
                return c.json({ error: "Failed to fetch content" }, 500);
            }
        });

        // PUT /admin/cms/content/:contentTypeId/:id
        this.app.put('/admin/cms/content/:contentTypeId/:id', async (c) => {
            try {
                const contentTypeId = c.req.param('contentTypeId');
                const id = c.req.param('id');
                const contentData = await c.req.json<ContentData>();
                const updatedContent = await this.contentService.updateContent(contentTypeId, id, contentData);
                return c.json(updatedContent);
            } catch (error) {
                console.error("Error updating content:", error);
                return c.json({ error: "Failed to update content" }, 400);
            }
        });

        // DELETE /admin/cms/content/:contentTypeId/:id
        this.app.delete('/admin/cms/content/:contentTypeId/:id', async (c) => {
            try {
                const contentTypeId = c.req.param('contentTypeId');
                const id = c.req.param('id');
                await this.contentService.deleteContent(contentTypeId, id);
                return c.json({ success: true, message: "Content deleted successfully" });
            } catch (error) {
                console.error("Error deleting content:", error);
                return c.json({ error: "Failed to delete content" }, 500);
            }
        });

        // ******************* CATEGORY ROUTES (unchanged) *******************
        this.app.get('/admin/cms/categories', async (c) => { /* ... */ });
        this.app.post('/admin/cms/categories', async (c) => { /* ... */ });

        // ******************* ADMIN UI ROUTE (Keep) *******************
        this.app.get('/admin/cms', async (c) => { /* ... */ });
    }
}