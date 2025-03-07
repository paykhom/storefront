// src/core/middleware/middleware.js
class Middleware {
    constructor(app) {
        this.app = app;
    }
  
    /**
     * The main handle logic for the middleware should be placed in this method.
     * @param {object} request - Request parameters.
     * @returns {boolean} - If middleware chain can proceed return true, otherwise false.
     */
    async handle(request) {
        return true;
    }
  }
  
  export default Middleware;