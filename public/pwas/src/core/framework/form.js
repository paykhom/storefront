// src/core/framework/form.js

class Form {
    constructor(app, formId, options = {}) {
        this.app = app;
        this.formId = formId;
        this.options = options;
    }

    render() {
         return `<form id="${this.formId}" ${this.options.onSubmit ? `data-on-submit="${this.options.onSubmit}"` : ""}>
            ${this.options.fields ? this.options.fields.map(field => {
                  return  `<label for="${field.name}">${field.label}: </label>
                    <input type="${field.type}" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}><br><br>`
             }).join("") : ""}
            ${this.options.submitButton ? `<button type="submit">${this.options.submitButton}</button>` : ""}
        </form>`
    }

}

export default Form;