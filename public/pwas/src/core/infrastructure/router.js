// src/core/infrastructure/router.js

class Router {
    constructor() {
      this.routes = [];
      this.currentRoute = null;
    }

    /**
     * Registers a route with the router.
     * @param {string} path - The path of the route (e.g., '/users/:id').
     * @param {object} controller - The controller class.
     * @param {object} view - The view class.
     * @param {array} middleware - The array of middleware classes.
     */
    registerRoute(path, controller, view, middleware = []) {
      if (typeof path !== 'string' ) {
        throw new Error(`Route path ${path} must be a string`);
      }
      if (typeof controller !== 'function' ) {
        throw new Error(`Route controller must be a class`);
      }
      if (typeof view !== 'function' ) {
        throw new Error(`Route view must be a class`);
      }
      if (!Array.isArray(middleware) ) {
        throw new Error(`Route middleware must be an array`);
      }

      this.routes.push({
        path,
        controller,
        view,
        middleware
      });
    }


    /**
      * Matches a given URL path to a route and extract the parameters.
      * @param {string} path - The URL path to match.
      * @returns {object|null} An object with the matching route and params, or null if no match.
     */
    matchRoute(path) {
      for (const route of this.routes) {
          const routePath = route.path;
          // Convert route path to regex
          const regexPath = routePath.replace(/:\w+/g, '([^/]+)');
          const regex = new RegExp(`^${regexPath}$`);
          const match = path.match(regex);

          if(match) {
            const params = {};
            const paramNames = routePath.match(/:\w+/g) || [];
            for (let i=0; i<paramNames.length; i++) {
              params[paramNames[i].slice(1)] = match[i+1];
            }
            return {
              route: route,
              params: params
            };
          }
      }
      return null;
    }

    /**
     * Navigates to a given URL path.
     * @param {string} path - The URL path to navigate to.
     */
    navigate(path, replace = false) {
      this.currentRoute = this.matchRoute(path);
        if(this.currentRoute) {
            if(replace) {
               history.replaceState(null, null, path);
            } else {
              history.pushState(null, null, path);
            }
           console.log(`Navigated to: ${path}`);
           console.log("Matched route:", this.currentRoute);
        } else {
            console.warn(`Route not found for path: ${path}`);
        }
    }
}

export default Router;