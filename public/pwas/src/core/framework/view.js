// src/core/framework/view.js

class View {
    constructor(app) {
       this.app = app;
       this.dom = this.app.resolveService("dom");
        console.log(`${this.constructor.name} constructed!`);
    }

    render(data) {
      throw new Error('Render method must be implemented by the view class.');
    }

     async attachEvents() {
       const formElements = this.dom.querySelectorAll('form[data-on-submit]');
        if(!formElements) {
          return;
        }

       for (const form of formElements) {
            form.addEventListener('submit', async (event) => {
                event.preventDefault();
                const onSubmitHandler = form.getAttribute('data-on-submit');
                if(!onSubmitHandler || typeof this[onSubmitHandler] !== 'function' ) {
                   console.error(`Submit handler ${onSubmitHandler} is not found in view class.`);
                    return;
                }
                 const formData = new FormData(event.target);
                const formValues = {};
                for (const [name, value] of formData.entries()) {
                    formValues[name] = value;
                }
                await this[onSubmitHandler](formValues, event);
            });
       }
    }
}

export default View;