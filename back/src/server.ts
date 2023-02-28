import "reflect-metadata";
import "./database/ormconfig";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import routes from "./routes/index";
import AppError from "./services/AppError";

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    console.log(err);

    return response.status(500).json({
        status: "error",
        message: "Erro interno do servidor.",
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});
