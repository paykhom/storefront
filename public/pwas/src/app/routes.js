// src/app/routes.js

import HomeController from './controllers/homeController.js';
import HomeView from './views/homeView.js';

import UserController from './controllers/userController.js';
import UserView from './views/userView.js';

import AuthMiddleware from '../core/middleware/authMiddleware.js';
import LoggingMiddleware from '../core/middleware/loggingMiddleware.js';

const routes = [
    {
        path: '/',
        controller: HomeController,
        view: HomeView,
        //middleware: [LoggingMiddleware]
    },
    {
        path: '/users',
        controller: UserController,
        view: UserView,
        //middleware: [AuthMiddleware, LoggingMiddleware]
    },
    {
        path: '/users/:id',
        controller: UserController,
        view: UserView,
        //middleware: [AuthMiddleware, LoggingMiddleware]
    }
];

export default routes;