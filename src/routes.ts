import express, { Request, Response } from 'express';
import { ApplicationController } from './controllers/ApplicationController';
import ReceiverController from './controllers/ReceiverController';
import UserController from './controllers/UserController';

const routes = express.Router();

routes.get('/', new ApplicationController().info);

routes.get('/user', UserController.show);
routes.post('/user', UserController.create);

routes.get('/received', ReceiverController.show);
routes.post('/received', ReceiverController.create);

export { routes };