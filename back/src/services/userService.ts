import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

import auth from "../config/auth";
import UserModel from "../database/models/userModel";
import UserRepository from "../database/repositories/userRepository";
import AppError from "./AppError";

export default class UserService {
    constructor(private userRepository = new UserRepository()) {}

    async create(data: UserModel) {
        const hashSenha = await hash(data.senha, 8);
        data.senha = hashSenha;
        return await this.userRepository.create(data);
    }

    public async findAllUsers(): Promise<UserModel[]> {
        return await this.userRepository.findAllUsers();
    }

    async login(user: UserModel) {
        try {
            const { login, senha } = user;

            const userDB = await this.userRepository.findByLogin(login);

            if (!userDB) throw new AppError("Usuário ou senha inválidos", 401);

            if (!bcrypt.compareSync(senha, userDB.senha))
                throw new AppError("Usuário ou senha inválidos", 401);

            const token = jwt.sign(
                {
                    _id: Math.random(),
                    name: userDB.login,
                },
                auth.jwt.secret,
                { expiresIn: auth.jwt.expiresIn }
            );

            return { userDB, token };
        } catch (error) {
            return new AppError("Usuário ou senha inválidos", 400);
        }
    }
}
