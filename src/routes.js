import express from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Rotas

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

module.exports = routes;
