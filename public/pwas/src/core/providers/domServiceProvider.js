// src/core/providers/domServiceProvider.js

class DomServiceProvider {
    constructor(app) {
        this.app = app;
    }

    async register() {
      // Register required dependencies here.
        console.log("DomServiceProvider registered.");
    }

    resolve(name) {
      if (name === "dom") {
          return {
              querySelector: (selector) => document.querySelector(selector),
              querySelectorAll: (selector) => document.querySelectorAll(selector),
              createElement: (element) => document.createElement(element),
              innerHTML: (element, html) => element.innerHTML = html,
          };
      }
        return null;
    }
}

export default DomServiceProvider;