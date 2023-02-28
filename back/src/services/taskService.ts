import TaskModel from "@database/models/taskModel";
import TaskRepository from "../database/repositories/taskRepository";

import AppError from "./AppError";

interface Lista {
    todo: TaskModel[];
    doing: TaskModel[];
    done: TaskModel[];
}

class TaskService {
    constructor(private taskRepository = new TaskRepository()) {}

    public async create(data: TaskModel) {
        return await this.taskRepository.create(data);
    }

    public async delete(id: string) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe!", 404);

        await this.taskRepository.delete(id);

        return await this.findAllTasks();
    }

    public async update(id: string, data: TaskModel) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe", 404);

        task.titulo = data.titulo;
        task.conteudo = data.conteudo;
        task.lista = data.lista;

        return await this.taskRepository.save(task);
    }

    public async findById(id: string) {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError("Task não existe", 404);

        return task;
    }

    public async findAllTasks(): Promise<Lista> {
        const tasks = await this.taskRepository.findAllTasks();

        const filteredTasks: Lista = {
            todo: tasks.filter((tasks) => tasks.lista === "todo"),
            doing: tasks.filter((tasks) => tasks.lista === "doing"),
            done: tasks.filter((tasks) => tasks.lista === "done"),
        };

        return filteredTasks;
    }
}

export default TaskService;
