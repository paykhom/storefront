// cms-plugin/modules/repository/taxonomy-repository.ts
import { CategoryData, TagData } from '../../core/types/cms';

export interface ITaxonomyRepository {
    getCategory(id: string): Promise<CategoryData | null>;
    getCategoryBySlug(slug: string): Promise<CategoryData | null>;
    getCategories(query: any): Promise<CategoryData[]>;
    createCategory(data: CategoryData): Promise<CategoryData>;
    updateCategory(id: string, data: CategoryData): Promise<CategoryData>;
    deleteCategory(id: string): Promise<void>;

    getTag(id: string): Promise<TagData | null>;
    getTagBySlug(slug: string): Promise<TagData | null>;
    getTags(query: any): Promise<TagData[]>;
    createTag(data: TagData): Promise<TagData>;
    updateTag(id: string, data: TagData): Promise<TagData>;
    deleteTag(id: string): Promise<void>;
}

export class TaxonomyRepository implements ITaxonomyRepository {
  // Implement data access logic here (e.g., database queries)
  // ...
}