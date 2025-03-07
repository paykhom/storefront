// src/core/providers/httpServiceProvider.js
import Request from '../framework/request.js';
import Response from '../framework/response.js';

class HttpServiceProvider {
    constructor(app) {
       this.app = app;
       console.log("HttpServiceProvider constructed!");
    }

    async register() {
      // Register required dependencies here.
        console.log("HttpServiceProvider registered.");
    }

    resolve(name) {
      if (name === "http") {
            return {
              fetch: async (url, method = 'GET', headers = {}, body = null) => {
                  const request = new Request(url, method, headers, body);
                   try {
                       const response = await fetch(request.url, {
                           method: request.method,
                           headers: request.headers,
                           body: request.body
                       });
                       const responseBody = await response.json();
                        return new Response(response.status, responseBody, response.headers)

                   } catch(e) {
                       return new Response(500, null, {"error": e})
                   }
              }
            };
       }
      return null;
    }
}

export default HttpServiceProvider;