
export default class View {
    constructor(args) {
        this.args = args;
        this.state = {};
        this.component = {};
        this.id = "";
        this.container = null;
        this.eventRegistry = {};
    }


    yield(generator) {
        let html = "";
        let result;

        while (!(result = generator.next()).done) {
            const value = result.value;

            if (typeof value === "object" && value && Symbol.iterator in value) {
                html += this.yield(value);
            } else {
                html += value || "";
            }
        }

        return html;
    }

    async render(data) {
        function expando(obj, data) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    obj[key] = data[key];
                }
            }
        }
        this.data = data;

		return this.yield(this.template(this.data));
    }

    // Assuming template is a method that needs to be implemented by subclasses
    template(data) {
        throw new Error("Method 'template' must be implemented by subclass");
    }



}

