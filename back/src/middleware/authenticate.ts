import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import AppError from "../services/AppError";

export default function AuthenticateMiddleware(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) throw new AppError("Token inválido ou expirado", 401);

        const [type, token] = authHeader.split(" ");
        const decoded = verify(token, auth.jwt.secret);

        return next();
    } catch {
        throw new AppError("Token JWT inválido", 401);
    }
}
