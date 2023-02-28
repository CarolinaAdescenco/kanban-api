import { Repository } from "typeorm";

import connectDB from "../ormconfig";

import TaskModel from "../models/taskModel";

class TaskRepository {
    repository: Repository<TaskModel>;

    constructor() {
        this.repository = connectDB.getRepository(TaskModel);
    }

    public async save(taskData: TaskModel): Promise<TaskModel> {
        return await this.repository.save(taskData);
    }

    public async create(taskData: TaskModel): Promise<TaskModel> {
        const task = this.repository.create(taskData);
        await this.repository.save(task);

        return task;
    }

    public async delete(id: string): Promise<TaskModel | null> {
        await this.repository.delete(id);
        return null;
    }

    public async findById(id: string): Promise<TaskModel | null> {
        const task = await this.repository.findOne({
            where: { id },
        });

        return task;
    }

    public async findAllTasks(): Promise<TaskModel[]> {
        return await this.repository.find();
    }
}

export default TaskRepository;
