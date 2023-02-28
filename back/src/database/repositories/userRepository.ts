import UserModel from "../models/userModel";
import connectDB from "../ormconfig";
import { Repository } from "typeorm";

class UserRepository {
    repository: Repository<UserModel>;

    constructor() {
        this.repository = connectDB.getRepository(UserModel);
    }

    public async save(userData: UserModel): Promise<UserModel> {
        return await this.repository.save(userData);
    }

    public async create(userData: UserModel): Promise<UserModel> {
        const user = this.repository.create(userData);
        await this.repository.save(userData);

        return user;
    }

    public async findAllUsers(): Promise<UserModel[]> {
        return await this.repository.find();
    }

    public async findByLogin(login: string): Promise<UserModel | null> {
        const user = await this.repository.findOne({ where: { login } });

        return user;
    }
}

export default UserRepository;
