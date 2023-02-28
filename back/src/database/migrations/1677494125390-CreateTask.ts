import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTask1677494125390 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "task",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "titulo",
                        type: "string",
                    },
                    {
                        name: "conteudo",
                        type: "string",
                    },
                    {
                        name: "lista",
                        type: "string",
                    },
                    {
                        name: "data_criacao",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "data_atualizacao",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task");
    }
}
