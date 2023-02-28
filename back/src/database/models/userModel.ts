import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
class UserModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    login: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_atualizacao: Date;
}

export default UserModel;
