// cms-pluginmodules/service/taxonomy-service.ts
import { CategoryData, TagData } from '../../core/types/cms';

// cms-pluginmodules/service/taxonomy-service.ts
import { ITaxonomyService, CategoryData, TagData } from '../../core/types/cms';
import { ITaxonomyRepository } from '../repository/taxonomy-repository';

export interface ITaxonomyService {
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

export class TaxonomyService implements ITaxonomyService {
  private taxonomyRepository: ITaxonomyRepository;

  constructor(taxonomyRepository: ITaxonomyRepository) {
    this.taxonomyRepository = taxonomyRepository;
  }

  async getCategory(id: string): Promise<CategoryData | null> {
    return this.taxonomyRepository.getCategory(id);
  }

    async getCategoryBySlug(slug: string): Promise<CategoryData | null> {
        return this.taxonomyRepository.getCategoryBySlug(slug)
    }

  async getCategories(query: any): Promise<CategoryData[]> {
    return this.taxonomyRepository.getCategories(query);
  }

  async createCategory(data: CategoryData): Promise<CategoryData> {
    // Apply 'cms.category.beforeCreate' filter
    const filteredData = this.applyFilters<CategoryData>('cms.category.beforeCreate', data);

    const createdCategory = await this.taxonomyRepository.createCategory(filteredData);

    // Emit 'cms.category.created' event
    this.emitAction('cms.category.created', { categoryId: createdCategory.id });

    return createdCategory;
  }

  async updateCategory(id: string, data: CategoryData): Promise<CategoryData> {
    // Apply 'cms.category.beforeUpdate' filter
    const filteredData = this.applyFilters<CategoryData>('cms.category.beforeUpdate', data);

    const updatedCategory = await this.taxonomyRepository.updateCategory(id, filteredData);

    // Emit 'cms.category.updated' event
    this.emitAction('cms.category.updated', { categoryId: updatedCategory.id });

    return updatedCategory;
  }

  async deleteCategory(id: string): Promise<void> {
    await this.taxonomyRepository.deleteCategory(id);

    // Emit 'cms.category.deleted' event
    this.emitAction('cms.category.deleted', { categoryId: id });
  }

  async getTag(id: string): Promise<TagData | null> {
    return this.taxonomyRepository.getTag(id);
  }

  async getTags(query: any): Promise<TagData[]> {
    return this.taxonomyRepository.getTags(query);
  }

  async createTag(data: TagData): Promise<TagData> {
    // Apply 'cms.tag.beforeCreate' filter
    const filteredData = this.applyFilters<TagData>('cms.tag.beforeCreate', data);

    const createdTag = await this.taxonomyRepository.createTag(filteredData);

    // Emit 'cms.tag.created' event
    this.emitAction('cms.tag.created', { tagId: createdTag.id });

    return createdTag;
  }

  async updateTag(id: string, data: TagData): Promise<TagData> {
    // Apply 'cms.tag.beforeUpdate' filter
    const filteredData = this.applyFilters<TagData>('cms.tag.beforeUpdate', data);

    const updatedTag = await this.taxonomyRepository.updateTag(id, filteredData);

    // Emit 'cms.tag.updated' event
    this.emitAction('cms.tag.updated', { tagId: updatedTag.id });

    return updatedTag;
  }

  async deleteTag(id: string): Promise<void> {
    await this.taxonomyRepository.deleteTag(id);

    // Emit 'cms.tag.deleted' event
    this.emitAction('cms.tag.deleted', { tagId: id });
  }
}