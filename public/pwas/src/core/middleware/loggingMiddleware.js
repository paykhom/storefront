// src/core/middleware/loggingMiddleware.js
import Middleware from './middleware.js';

class LoggingMiddleware extends Middleware {
    constructor(app) {
        super(app);
      console.log("LoggingMiddleware constructed!", this.app);
    }

    async handle(request) {
        console.log("LoggingMiddleware - request received", request);
        return true; // Allow request to proceed
    }
}

export default LoggingMiddleware;