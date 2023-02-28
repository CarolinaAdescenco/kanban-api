import { Router } from "express";
import AuthenticateMiddleware from "../middleware/authenticate";

import TaskController from "../controller/taskController";
import UserController from "../controller/userController";

const routes = Router();
const taskController = new TaskController();
const userController = new UserController();

routes.post("/login/signup", userController.create);
routes.post("/login/", userController.login);

routes.use(AuthenticateMiddleware).get("/users/", userController.findAllUsers);

routes
    .use(AuthenticateMiddleware)
    .post("/cards/", taskController.create, AuthenticateMiddleware);
routes
    .use(AuthenticateMiddleware)
    .get("/cards/", taskController.findAllTasks, AuthenticateMiddleware);
routes
    .use(AuthenticateMiddleware)
    .put("/cards/:id", taskController.update, AuthenticateMiddleware);
routes
    .use(AuthenticateMiddleware)
    .delete("/cards/:id", taskController.delete, AuthenticateMiddleware);

export default routes;
