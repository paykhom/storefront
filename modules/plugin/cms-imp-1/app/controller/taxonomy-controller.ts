// cms-plugin/app/controller/taxonomy-controller.ts
import { TaxonomyRepository } from '../repository/taxonomy-repository';
import { CategoryData, TagData } from '../../core/types/cms';

export class TaxonomyController {
  constructor(private taxonomyRepository: TaxonomyRepository) {}

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
    // Apply validation, sanitization, etc. here
    return this.taxonomyRepository.createCategory(data);
  }

  async updateCategory(id: string, data: CategoryData): Promise<CategoryData> {
    // Apply validation, sanitization, etc. here
    return this.taxonomyRepository.updateCategory(id, data);
  }

  async deleteCategory(id: string): Promise<void> {
    return this.taxonomyRepository.deleteCategory(id);
  }

  async getTag(id: string): Promise<TagData | null> {
    return this.taxonomyRepository.getTag(id);
  }

  async getTags(query: any): Promise<TagData[]> {
    return this.taxonomyRepository.getTags(query);
  }

  async createTag(data: TagData): Promise<TagData> {
    // Apply validation, sanitization, etc. here
    return this.taxonomyRepository.createTag(data);
  }

  async updateTag(id: string, data: TagData): Promise<TagData> {
    // Apply validation, sanitization, etc. here
    return this.taxonomyRepository.updateTag(id, data);
  }

  async deleteTag(id: string): Promise<void> {
    return this.taxonomyRepository.deleteTag(id);
  }
}