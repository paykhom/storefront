// src/services/apiService.js
class ApiService {
    constructor(http) {
      this.http = http;
    }

    async get(url) {
       return await this.http.fetch(url);
    }

    async post(url, body) {
       return await this.http.fetch(url, 'POST', {'Content-Type': 'application/json'}, JSON.stringify(body))
    }
}

export default ApiService;