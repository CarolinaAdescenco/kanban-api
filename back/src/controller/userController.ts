import UserService from "../services/userService";
import { Request, Response } from "express";

export default class UserController {
    constructor() {}

    async create(request: Request, response: Response) {
        try {
            const data = request.body;
            const user = await new UserService().create(data);
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async login(request: Request, response: Response) {
        try {
            const data = request.body;
            const user = await new UserService().login(data);
            return response.json(user);
        } catch (error) {
            return response.status(500).json(error);
        }
    }

    public async findAllUsers(request: Request, response: Response) {
        try {
            const users = await new UserService().findAllUsers();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).send(error);
        }
    }
}
