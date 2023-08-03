import { Response } from "express";
import uuid from "../util/uuid";
import { ErrorCode } from ".";

export default function isError(res: Response, status: number = 404, message: ErrorCode = { code: "request/unauthorized", message: "You are not authorized." }) {
    return res.status(status).json({
        type: message.code.split('/')[0] || 'error',
        status: 'error',
        error: message.code,
        target: message.target,
        message: message.message,
        request: uuid(),
    });
}
