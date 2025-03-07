// src/app/views/userView.js
import View from '../../core/framework/view.js';

class UserView extends View {
    constructor(app) {
       super(app);
    }

    render(data) {
      return `
           <h1>Users View</h1>
           <p>${data.message}</p>
       `;
    }
}

export default UserView;