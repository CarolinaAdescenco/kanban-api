import { Request, Response } from "express";

import TaskService from "../services/taskService";

export default class TaskController {
    public async create(request: Request, response: Response) {
        try {
            const data = request.body;
            const task = await new TaskService().create(data);
            return response.status(201).json(task);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    public async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const tasks = await new TaskService().delete(id);
            return response.status(200).json(tasks);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    public async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const data = request.body;
            const task = await new TaskService().update(id, data);
            return response.status(201).json(task);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    public async findAllTasks(request: Request, response: Response) {
        try {
            const tasks = await new TaskService().findAllTasks();
            return response.status(200).json(tasks);
        } catch (error) {
            return response.status(500).send(error);
        }
    }
}
