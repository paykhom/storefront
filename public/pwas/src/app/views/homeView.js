// src/app/views/homeView.js
import View from '../../core/framework/view.js';
import Form from '../../core/framework/form.js';

class HomeView extends View {
    constructor(app) {
        super(app);
      this.form = new Form(this.app, 'homeForm', {
         onSubmit: 'handleFormSubmit',
          submitButton: "Submit",
           fields: [
               { name: 'name', label: 'Name', type: 'text', required: true },
               { name: 'message', label: 'Message', type: 'text', required: false}
           ]
      });
    }


    render(data) {
        return `
            <h1>Home View</h1>
            <p>${data.message}</p>
            ${this.form.render()}
        `;
    }


    async handleFormSubmit(formData) {
        console.log("Form submitted", formData);
      const data = await  this.app.resolveService("HomeController").handleForm(formData);
       document.body.innerHTML = this.render(data);
       this.attachEvents();
    }

     async attachEvents() {
        await super.attachEvents();
     }
}

export default HomeView;