// src/core/framework/request.js

class Request {
    constructor(url, method = 'GET', headers = {}, body = null) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }
}

export default Request;