import { Context } from "hono";

// types/view.ts
export interface IView {
    render(): string | Promise<string>;
}
  
export class Controller {
    protected args: any;
    private viewClassCache!: Map<string, any>; // Cache for view classes  
    
    constructor(args: any) {
        this.args = args;
        this.viewClassCache = new Map(); // Initialize cache in constructor 

    }

    protected async render(
        ctx: Context,
        viewPath: string,
        data: Record<string, any>
      ): Promise<Response> {
        try {
          // Construct the full path from project root manually
          const basePath: string = process.cwd();
          const theme = "vogue"
          const fullPath: string = `${basePath}/src/app/themes/${theme}/${viewPath}.js`;
          const viewFile = Bun.file(fullPath);
          //console.log(fullPath);
    
          // Check if file exists
          if (!(await viewFile.exists())) {
            throw new Error(`View file not found: ${fullPath}`);
          }
    
          // Check cache first
          let ViewClass;
          if (this.viewClassCache.has(fullPath)) {
            ViewClass = this.viewClassCache.get(fullPath);
          } else {
            // If not in cache, import and store it
            const module = await import(fullPath);
            ViewClass = module.default;
    
            if (!ViewClass || typeof ViewClass !== "function") {
              throw new Error("View must export a default class");
            }
    
            this.viewClassCache.set(fullPath, ViewClass); // Cache the class
          }
    
          // Instantiate the view class with data
          const viewInstance = new ViewClass(data);
    
          if (typeof viewInstance.render !== "function") {
            throw new Error("View class must have a render method");
          }
    
          const html = await viewInstance.render();
          return ctx.html(html);
        } catch (error) {
          console.error("Render error:", error);
          return ctx.html("Error rendering view", 500);
        }
      }
        
      protected async render_v1(
        ctx: Context,
        viewPath: string,
        data: Record<string, any>
      ): Promise<Response> {
        try {
          // Construct the full path from project root manually
          const basePath: string = process.cwd();
          const fullPath: string = `${basePath}/src/app/views/${viewPath}.js`;
          const viewFile = Bun.file(fullPath);
          //console.log(fullPath);
    
          // Check if file exists
          if (!(await viewFile.exists())) {
            throw new Error(`View file not found: ${fullPath}`);
          }
    
          // Use dynamic import with the full path instead of eval
          const module = await import(fullPath);
          const ViewClass = module.default;
    
          if (!ViewClass || typeof ViewClass !== "function") {
            throw new Error("View must export a default class");
          }
    
          const viewInstance = new ViewClass(data);
    
          if (typeof viewInstance.render !== "function") {
            throw new Error("View class must have a render method");
          }
    
          const html = await viewInstance.render();
          return ctx.html(html);
        } catch (error) {
          console.error("Render error:", error);
          return ctx.html("Error rendering view", 500);
        }
      }
    
}