import {MenuItem} from "../menus"

import {Context, Next} from "hono"
import {Plugin} from ".."
import {WebEngine} from "../../../modules/engine/web-engine"
import { ContentService } from "./modules/service/content-service"

export class CMSPlugin extends Plugin {
	public id = 'core.cms';
	public name = 'CMS Plugin';
  
	private contentService: ContentService;
	private taxonomyService: TaxonomyService;
	private routeHandler: RouteHandler;
	//private cmsApp: Hono;  <-- No more sub-app instance directly within the plugin
  
	constructor(config: any) {
	  super(config);
	  //this.cmsApp = new Hono(); // No more creating sub-app in the constructor
	  //this.contentService = new ContentService(/* inject dependencies */); No, resolved via DI
	  //this.taxonomyService = new TaxonomyService(/* inject dependencies */); // Resolved via DI
	  // The RouteHandler needs to access the *main* Hono app instance to register the routes
	  // We will now inject WebEngine later in activate instead
	  this.routeHandler = new RouteHandler(null, null, null); // Inject null for now
	}
  
	async install(): Promise<void> {
	  // Create database tables, if needed
	  this.log('CMSPlugin installed');
	}
  
	async activate(): Promise<void> {
	  this.log('CMSPlugin activated');
      // 1. Resolve the WebEngine
	  const webEngine = this.resolve<WebEngine>("webEngine");

	  if (!webEngine) {
		console.error("WebEngine not resolved.  CMSPlugin activation failed.");
		return;
	  }
  
	  // 2. Register CMS-specific dependencies in the plugin container
  
	  // 2.1 Register Repositories
	  this.register(
		  'contentRepository',
		  (config: any) => new ContentRepository(config.cmsApiBaseUrl),
		  this.config
	  );
  
		this.register(
			'taxonomyRepository',
			(config: any) => new ContentRepository(config.cmsApiBaseUrl),
			this.config
		);
  
	  // 2.2  Register Services
	  this.register<ContentService>(
		'contentService',
		() => new ContentService(this.resolve('contentRepository')),
		{}
	  );
  
	  this.register<TaxonomyService>(
		'taxonomyService',
		() => new TaxonomyService(this.resolve('taxonomyRepository')),
		{}
	  );
  
	  // 3. Resolve the services to be injected into RouteHandler
	  this.routeHandler = new RouteHandler(
		 this.resolve('contentService'),
		 this.resolve('taxonomyService'),
		 webEngine.app
	  );
  
	  // Register routes
	  this.routeHandler.registerRoutes();
	}


	async uponReady() {
	  // 3.  Resolve the services to be injected into RouteHandler
  
	  //  Update the RouteHandler to inject the services
	  this.routeHandler = new RouteHandler(
		this.resolve('contentService'),   // Resolve CMSPlugin-specific
		this.resolve('taxonomyService'), // Resolve CMSPlugin-specific
		webEngine.app // Resolve WebEngine.app
	 );
 
	 // Register routes on the WebEngine's Hono app
	 this.routeHandler.registerRoutes();


	}

	async deactivate(): Promise<void> {
	  this.log('CMSPlugin deactivated');
	  // Unmount routes here if necessary
	}
  
	  async load(): Promise<void> {
		  this.log('CMSPlugin loaded');
	  }
  }

  //11111111111111111111111111111: MERGE....................
export class Cms extends Plugin {
	public name = "Hello World"
	public slug = "hello-world"
	public description = "A simple custom plugin"
	public version = "1.0.0"

	constructor(config) {
		super(config)
		this.config = {greeting: "Hello, World!"}
	}

	async uponInit(): Promise<void> {
		// Now, register CMS-specific dependencies in the plugin container
		this.register<ContentService>(
			'contentService',
			() => new ContentService(this.resolve('contentRepository')),
			{}
		);
	
		this.register<TaxonomyService>(
			'taxonomyService',
			() => new TaxonomyService(this.resolve('taxonomyRepository')),
			{}
		);

	}

	async uponReady(): Promise<void> {
		// IMPORTANT: Resolve the instances of these two from the *plugin* container

		this.routeHandler = new RouteHandler(
			this.resolve('contentService'),   // Resolve CMSPlugin-specific
			this.resolve('taxonomyService'), // Resolve CMSPlugin-specific
			this.resolve<WebEngine>("webEngine").app // Resolve WebEngine.app
		);

	}

	async uponStart(): Promise<void> {
        
    }

	getMenus(): MenuItem {
		return {
			label: "CMS",
			icon: "feather feather-book", // Replace with feather icon
			children: [
				{
					label: "Content",
					icon: "feather feather-file-text",
					children: [
						{
							label: "Pages",
							url: "/admin/cms/pages",
							icon: "feather feather-file", // Replace with feather icon
							permissions: ["cms.page.read"]
						},
						{
							label: "Posts",
							url: "/admin/cms/posts",
							icon: "feather feather-edit", // Replace with feather icon
							permissions: ["cms.post.read"]
						}
					]
				},
				{
					label: "Taxonomies",
					icon: "feather feather-folder", // Replace with feather icon
					children: [
						{
							label: "Categories",
							url: "/admin/cms/categories",
							icon: "feather feather-folder", // Replace with feather icon
							permissions: ["cms.category.read"]
						},
						{
							label: "Tags",
							url: "/admin/cms/tags",
							icon: "feather feather-tag", // Replace with feather icon
							permissions: ["cms.tag.read"]
						}
					]
				},
				{
					label: "Settings",
					url: "/admin/cms/settings",
					icon: "feather feather-settings", // Replace with feather icon
					permissions: ["cms.settings.read"]
				},
				{
					label: "Content Types",
					url: "/admin/cms/content-types",
					icon: "feather feather-list", // Replace with feather icon
					permissions: ["cms.contentType.read"]
				}
			]
		}
	}
}
