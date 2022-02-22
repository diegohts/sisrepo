import { Router } from "express";

import auth from "./middlewares/auth";

import HelloController from "./controllers/HelloController";
import RepositoriesController from "./controllers/RepositoriesController";
import UsersController from "./controllers/UsersController";

const routes = new Router();

// controller publico 
routes.get('/hello', HelloController.index);

// middleware
routes.use(auth);

// controllers privados

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users/', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.post('/users/:user_id/repositories', RepositoriesController.destroy);


export default routes;