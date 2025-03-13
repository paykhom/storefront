import { minify } from 'terser';
import * as CleanCSS from 'clean-css';
import { join } from 'path';
import { Context } from 'hono'; // For typing the context parameter
import { BaseController as Controller } from "./base-controller";

// Define interfaces for cache and response data
interface CacheEntry {
  content: string;
  type: string;
}

interface ProcessContentResult {
  finalContent: string | null;
  contentType: string;
}

export class BundleController extends Controller {
  private bundleCache: Map<string, CacheEntry>;

  constructor(args: Record<string, any>={}) {
    super(args);
    this.bundleCache = new Map<string, CacheEntry>();
  }

  public async handleBundleRequest(c: Context): Promise<Response> {
    const version: string = c.req.param('version');
    const query: { type?: string; files?: string; minify?: string } = c.req.query();
    const type: string | undefined = query.type;
    const files: string | undefined = query.files;
    const minify: string | undefined = query.minify;

    // Validate required params
    if (!type || !files) {
      return c.text('Missing type or files parameter', 400); 
    }
    if (type !== 'script' && type !== 'css') {
      return c.text('Invalid type parameter', 400);
    }

    // Normalize minify param (default to 'no' if not provided)
    const shouldMinify: boolean = minify === 'yes';

    // Generate cache key
    const cacheKey: string = this.generateCacheKey(version, type, files, shouldMinify);
    if (this.bundleCache.has(cacheKey)) {
      const cached: CacheEntry = this.bundleCache.get(cacheKey) as CacheEntry;
      c.header('Content-Type', cached.type);
      return c.body(cached.content);
    }

    // Process files
    const fileList: string[] = files.split(';');
    const content: string = await this.concatenateFiles(fileList, c);

    if (c.res.status >= 400) {
      return c.res; // Return early if there was an error
    }

    // Minify and set content type
    const result: ProcessContentResult = this.processContent(type, content, shouldMinify);
    if (!result.finalContent) {
      return c.text(`Error minifying ${type === 'script' ? 'JavaScript' : 'CSS'}`, 500);
    }

    // Cache and serve
    this.bundleCache.set(cacheKey, { content: result.finalContent, type: result.contentType });
    c.header('Content-Type', result.contentType);
    return c.body(result.finalContent);
  }

  private generateCacheKey(version: string, type: string, files: string, shouldMinify: boolean): string {
    return `${version}-${type}-${files}-${shouldMinify}`;
  }

  private async concatenateFiles(fileList: string[], c: Context): string {
    let content: string = '';

    for (let i: number = 0; i < fileList.length; i++) {
      const filePath: string = fileList[i];
      const safePath: string = join('../../public', filePath);

      if (!safePath.startsWith('public')) {
        c.text(`Invalid file path: ${safePath}`, 400);
        return '';
      }

      try {
        const file = Bun.file(safePath);
        const exists: boolean = file.exists() as any; // Type coercion due to Promise return
        if (!exists) {
          c.text(`File not found: ${filePath}`, 404);
          return '';
        }
        const fileContent: string = await file.text() as any; // Type coercion due to Promise return
        content += fileContent + '\n';
      } catch (e) {
        c.text(`Error reading file: ${filePath}`, 500);
        return '';
      }
    }

    return content;
  }

  private processContent(type: string, content: string, shouldMinify: boolean): ProcessContentResult {
    let finalContent: string = content;
    let contentType: string;

    if (type === 'script') {
      contentType = 'application/javascript';
      /* PENDING
      if (shouldMinify) {
        const minified = minify(content);
        if (minified.error) {
          return { finalContent: null, contentType: '' };
        }
        finalContent = minified.code as string;
      } */
    } 
    else {
      contentType = 'text/css';
      /* PENDING
      if (shouldMinify) {
        const cleaner = new CleanCSS();
        const minified = cleaner.minify(content);
        if (minified.errors.length > 0) {
          return { finalContent: null, contentType: '' };
        }
        finalContent = minified.styles;
      }
      */
    }

    return { finalContent, contentType };
  }
}

export default BundleController;