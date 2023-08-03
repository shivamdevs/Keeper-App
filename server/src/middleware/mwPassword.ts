import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import errorCodes from "../error";
import isError from "../error/isError";

export default function mwPassword(req: Request, res: Response, next: NextFunction) {
    const password = req.body.password || "";
    if (isEmpty(password)) return isError(res, 404, errorCodes.request.empty.password);

    if (password.length < 6) return isError(res, 404, errorCodes.request.invalid.password);

    // TODO more validations here

    next();
}
