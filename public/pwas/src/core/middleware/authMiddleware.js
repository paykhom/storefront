// src/core/middleware/authMiddleware.js
import Middleware from './middleware.js';

class AuthMiddleware extends Middleware{
    constructor(app) {
        super(app);
      console.log("AuthMiddleware constructed!", this.app);
    }

    async handle(request) {
        console.log("AuthMiddleware - processing request!", request);

      // Example authentication logic (replace with your actual auth logic)
      const isAuthenticated = true; // Assume authentication logic here
       if (!isAuthenticated) {
           console.log("AuthMiddleware - request blocked as user is not authorized.");
           return false;
       }
       console.log("AuthMiddleware - request authorized!");
        return true; // Allow request to proceed
    }
}

export default AuthMiddleware;