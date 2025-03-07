// src/core/framework/response.js

class Response {
    constructor(status, body = null, headers = {}) {
        this.status = status;
        this.body = body;
        this.headers = headers;
    }
}

export default Response;