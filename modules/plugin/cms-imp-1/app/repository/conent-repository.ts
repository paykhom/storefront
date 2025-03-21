// cms-pluginmodules/repository/content-repository.ts
import { IContentRepository, ContentData, ContentType } from '../../core/types/cms';

export class ContentRepository implements IContentRepository {
    private apiBaseUrl: string;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }


    // Content Type Methods
    async getContentType(id: string): Promise<ContentType | null> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content-types/${id}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentType;
        } catch (error) {
            console.error("Error fetching content type:", error);
            return null;
        }
    }

    async getContentTypes(): Promise<ContentType[]> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content-types`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentType[];
        } catch (error) {
            console.error("Error fetching content types:", error);
            return [];
        }
    }

    async createContentType(contentType: ContentType): Promise<ContentType> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content-types`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contentType),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentType;
        } catch (error) {
            console.error("Error creating content type:", error);
            throw error;
        }
    }

    async updateContentType(id: string, contentType: ContentType): Promise<ContentType> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content-types/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contentType),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentType;
        } catch (error) {
            console.error("Error updating content type:", error);
            throw error;
        }
    }

    async deleteContentType(id: string): Promise<void> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content-types/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error deleting content type:", error);
            throw error;
        }
    }


    // Generic Content methods
    async getContent(contentTypeId: string, id: string): Promise<ContentData | null> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content/${contentTypeId}/${id}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentData;
        } catch (error) {
            console.error("Error fetching content:", error);
            return null;
        }
    }

    async getContents(contentTypeId: string, query: any): Promise<any> {
        try {
            const params = new URLSearchParams(query).toString();
            const response = await fetch(`${this.apiBaseUrl}/content/${contentTypeId}?${params}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json(); // Expect {data: ContentData[], total: number, ...}
        } catch (error) {
            console.error("Error fetching content:", error);
            return { data: [], total: 0 };
        }
    }

    async createContent(contentTypeId: string, data: ContentData): Promise<ContentData> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content/${contentTypeId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentData;
        } catch (error) {
            console.error("Error creating content:", error);
            throw error;
        }
    }

    async updateContent(contentTypeId: string, id: string, data: ContentData): Promise<ContentData> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content/${contentTypeId}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json() as ContentData;
        } catch (error) {
            console.error("Error updating content:", error);
            throw error;
        }
    }

    async deleteContent(contentTypeId: string, id: string): Promise<void> {
        try {
            const response = await fetch(`${this.apiBaseUrl}/content/${contentTypeId}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error("Error deleting content:", error);
            throw error;
        }
    }
}