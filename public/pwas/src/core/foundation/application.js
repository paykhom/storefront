// src/core/foundation/application.js

import DIContainer from '../infrastructure/di.js';
import Router from '../infrastructure/router.js';

class Application {
    constructor() {
        this.diContainer = new DIContainer();
        this.router = new Router();
        this.services = {}; // Map to store resolved services.
        this.providers = {};
        this.middleware = [];
        this.bootstrapped = false;
        this.previousRoute = null;
    }

    /**
     * Registers a service with the application container.
     * @param {string} name - The name to register.
     * @param {object} service - The service class.
     */
    registerService(name, service) {
        if (typeof service !== 'function') {
            throw new Error(`The service ${name} must be a class.`);
        }

       if (this.diContainer.dependencies[name]) {
            throw new Error(`A service with name ${name} already registered.`);
        }
      this.diContainer.register(name, service);
    }

    /**
     * Registers a service provider with the application container.
     * @param {string} name - The name to register.
     * @param {object} provider - The service provider class.
     */
    registerProvider(name, provider) {
        if (typeof provider !== 'function') {
            throw new Error(`The provider ${name} must be a class.`);
        }

        if (this.providers[name]) {
            throw new Error(`A provider with name ${name} already registered.`);
        }
        this.providers[name] = provider;
    }

    /**
     * Registers a middleware function with the application.
     * @param {object} middleware - The middleware class.
     */
    registerMiddleware(middleware) {
      if (typeof middleware !== 'function') {
        throw new Error(`Middleware must be a class.`);
      }
       this.middleware.push(middleware);
    }


    /**
     * Bootstraps the application container by registering all of the required service providers.
     */
    async bootstrap() {
        if (this.bootstrapped) {
           return;
        }

        // Instantiate and register all of the service providers.
        for(let providerName in this.providers) {
            let ProviderClass = this.providers[providerName];
            let provider = new ProviderClass(this);
            await provider.register();
            this.providers[providerName] = provider;
        }

        this.bootstrapped = true;
    }

     /**
      * Resolves a service from the DI container.
      * @param {string} name - The name of the service to resolve.
      * @returns {*} The resolved service instance.
      */
     resolveService(name) {
        if (this.services[name]) {
            return this.services[name];
         }

          if(!this.diContainer.dependencies[name]) {
               throw new Error(`Service ${name} not registered in the application`)
          }

          const service = this.diContainer.resolve(name, this);
           this.services[name] = service;
           return service;
     }

    /**
     * Returns a service from service map.
     * @param {string} name - The name of the service to get.
     * @returns {*} The service instance.
     */
    getService(name) {
      if(!this.services[name]) {
          throw new Error(`Service ${name} not found`);
      }
      return this.services[name];
    }


    /**
     * Registers routes with the router.
     * @param {array} routes - An array of routes to register.
     */
    registerRoutes(routes) {
      if (!Array.isArray(routes)) {
        throw new Error('Routes must be an array.');
      }

      for(const route of routes) {
        this.router.registerRoute(route.path, route.controller, route.view, route.middleware)
      }
    }

    /**
      * Navigates to a given path using the router.
      * @param {string} path - The path to navigate to.
      */
     navigate(path, replace = false) {
       this.previousRoute = this.router.currentRoute;
        this.router.navigate(path, replace);
     }

    /**
     * Runs the application.
     */
    async run() {
        if (!this.bootstrapped) {
            await this.bootstrap();
        }

       // Register app instance for dependency injection
       this.diContainer.register('app', () => this)


      // Register all of the components to DI container
      this.registerService('ApiService', async (http) => new (await import('../services/apiService.js')).default(http));
        this.registerService('HomeController', async (app) => new (await import('../app/controllers/homeController.js')).default(app));
        this.registerService('UserController', async (app, apiService) => new (await import('../app/controllers/userController.js')).default(app, apiService));
       this.registerService('HomeView', async (app) => new (await import('../app/views/homeView.js')).default(app));
        this.registerService('UserView', async (app) => new (await import('../app/views/userView.js')).default(app));
       this.registerService("AuthMiddleware", async (app) => new (await import('../core/middleware/authMiddleware.js')).default(app));
        this.registerService("LoggingMiddleware", async (app) => new (await import('../core/middleware/loggingMiddleware.js')).default(app));

        this.registerProvider('dom', async (app) => new (await import('../core/providers/domServiceProvider.js')).default(app));
        this.registerProvider('http', async (app) => new (await import('../core/providers/httpServiceProvider.js')).default(app));


         window.addEventListener('popstate', (event) => {
             const path = window.location.pathname;
             this.navigate(path);
             console.log("History event pop state called with path:", path);
           });

       if(this.router.currentRoute) {
          const { route, params} = this.router.currentRoute;

         // Execute middleware pipeline.
          let middlewareChain = Promise.resolve(true);
          for (const middlewareClass of route.middleware) {
              middlewareChain = middlewareChain.then(async (canProceed) => {
                  if (!canProceed) {
                      return false;
                  }
                  const middleware = this.diContainer.resolve(middlewareClass.name, this);
                   return await middleware.handle({ route: route, params: params });
              });
          }


           // Resolve the controller and view from the application container.
           middlewareChain.then(async (canProceed) => {
               if(canProceed) {
                   const controller = this.diContainer.resolve(route.controller.name, this);
                   const view = this.diContainer.resolve(route.view.name, this);

                    // Determine action from path
                   let actionName = "index";

                  if(params && params.id) {
                      actionName = "show";
                  }

                   // Execute the controller action
                   let data = {};
                  if(typeof controller[actionName] === 'function') {
                       data = await controller[actionName](params);
                   } else {
                       console.error(`Controller ${route.controller.name} doesn't have the action ${actionName}`);
                   }

                   // Render the view
                  const html = view.render(data);
                   // Inject the rendered view into the page
                  document.body.innerHTML = html;
                    // Attach the events to the rendered view
                  await view.attachEvents();
               } else {
                   console.warn("Middleware chain stopped!");
               }
           });

        }
    }
}

export default Application;