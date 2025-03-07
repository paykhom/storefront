// src/app/views/homeView.js
import View from '../../core/framework/view.js';

class HomeView extends View {
    constructor(app) {
      super(app);
    }

    render(data) {
       return `
            <h1>Home View</h1>
            <p>${data.message}</p>
        `;
    }
}

export default HomeView;