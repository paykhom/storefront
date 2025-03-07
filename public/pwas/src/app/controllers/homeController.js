// src/app/controllers/homeController.js

class HomeController {
    constructor(app) {
      this.app = app;
        console.log("HomeController constructed!", this.app);
    }

    async index() {
      return {
           message: "Welcome to the Home Page!"
      };
    }

    async handleForm(formData) {
      console.log('Form submitted with data:', formData);
      return { message: `Welcome ${formData.name} to the Home Page! You submitted form with a message: ${formData.message}`}
    }
}

export default HomeController;