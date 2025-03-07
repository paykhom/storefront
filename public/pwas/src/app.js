// src/app.js

import Application from './core/foundation/application.js';
import routes from './app/routes.js';

const app = new Application();
app.registerRoutes(routes);

// BUGGY
// // Initial navigation based on the current URL path
// const currentPath = window.location.pathname;
// app.navigate(currentPath);



// STILL BUGGY
// // Initial navigation based on the current URL path
// const currentPath = window.location.pathname.replace(window.location.origin, "");
// app.navigate(currentPath);

// STILL BUGGY
// // Initial navigation based on the current URL path
// let currentPath = window.location.pathname
// if (currentPath.startsWith("/fw/src/index.html")) {
//   currentPath = "/";
// }
// app.navigate(currentPath);
//app.navigate('/');



app.run(); // Run the application