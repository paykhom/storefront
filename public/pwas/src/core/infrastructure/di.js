// src/core/infrastructure/di.js

class DIContainer {
    constructor() {
        this.dependencies = {};
    }

    /**
     * Registers a dependency (service) with the container.
     * @param {string} name - The name of the dependency.
     * @param {object|function} dependency - The dependency class or factory function.
     */
    register(name, dependency) {
        if (typeof dependency !== 'function') {
            throw new Error('Dependency must be a class or a factory function');
        }

        if(this.dependencies[name]) {
            throw new Error(`A dependency with name ${name} already registered.`);
        }

        this.dependencies[name] = dependency;
    }

    /**
     * Resolves a dependency (instantiates a service).
     * @param {string} name - The name of the dependency to resolve.
     * @param {Application} application - The application container.
     * @returns {*} The resolved dependency instance.
     */
    resolve_BUGGY(name, application) {
        const dependency = this.dependencies[name];

        if (!dependency) {
            throw new Error(`Dependency with name "${name}" not found.`);
        }

        if (typeof dependency === 'function') {

            // Get the parameters from the function
            const paramNames = this.getParamNames(dependency);
            const resolvedParams = paramNames.map((paramName) => {
                // First try resolve from the application services
                if (application.services[paramName]) {
                    let ServiceClass = application.services[paramName];
                    return this.resolve(paramName, application)
                }

               // Second try to resolve from service providers, but only if it has register function.
               if (application.providers[paramName] && application.providers[paramName].register) {
                  return application.providers[paramName].resolve(paramName);
               }

               throw new Error(`Unresolved dependency parameter "${paramName}" for "${name}"`);
           });
           return new dependency(...resolvedParams);
        }

        // This should never happen, added for code consistency
        throw new Error(`Dependency ${name} must be a function or a class.`);
    }

    resolve(name, application) {
        const dependency = this.dependencies[name];

        if (!dependency) {
            throw new Error(`Dependency with name "${name}" not found.`);
        }

        if (typeof dependency === 'function') {

            // Get the parameters from the function
            const paramNames = this.getParamNames(dependency);
            const resolvedParams = paramNames.map((paramName) => {
                // First try resolve from the application services. The service should already exist in the application service map.
                if (application.services[paramName]) {
                    return application.getService(paramName);
                }

               // Second try to resolve from service providers, but only if it has register and resolve function.
               if (application.providers[paramName] && application.providers[paramName].register && application.providers[paramName].resolve) {
                  return application.providers[paramName].resolve(paramName);
               }

               throw new Error(`Unresolved dependency parameter "${paramName}" for "${name}"`);
           });
           return new dependency(...resolvedParams);
        }

        // This should never happen, added for code consistency
        throw new Error(`Dependency ${name} must be a function or a class.`);
    }    

    /**
    * Extracts the parameter names of a function.
    * @param {function} func - The function.
    * @returns {array} An array of parameter names.
    */
    getParamNames(func) {
        const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        const ARGUMENT_NAMES = /([^\s,]+)/g;

        let fnStr = func.toString().replace(STRIP_COMMENTS, '');
        let result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        if (result === null)
            result = [];
        return result;
    }
}

export default DIContainer;