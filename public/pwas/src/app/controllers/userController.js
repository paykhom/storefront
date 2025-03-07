// src/app/controllers/userController.js

class UserController {
    constructor(app, apiService) {
        this.app = app;
        this.apiService = apiService
        console.log("UserController constructed!", this.app, this.apiService);
    }

    async index() {
        return {
             message: "User's page"
        };
    }

     async show(id) {
          const data = await this.apiService.get('https://jsonplaceholder.typicode.com/todos/' + id);
        return {
            message: `Details of user: ${id} - ${data.data.title}`,
        };
    }
}

export default UserController;