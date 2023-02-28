import { DataSource } from "typeorm";

const connectDB = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    entities: ["./src/database/models/**.ts"],
    migrations: ["./src/database/migrations/**.ts"],
    migrationsTableName: "migrations",
    synchronize: true,
});

connectDB
    .initialize()
    .then(() => console.log("Banco de dados iniciado!"))
    .catch((err) => console.log("Ocorreu um erro ao iniciar o DB!", err));

export default connectDB;
