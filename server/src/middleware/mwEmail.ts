import { NextFunction, Request, Response } from "express";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import errorCodes from "../error";
import isError from "../error/isError";

export default function mwEmail(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email || "";
    if (isEmpty(email)) return isError(res, 404, errorCodes.request.empty.email);

    if (!isEmail(email)) return isError(res, 404, errorCodes.request.invalid.email);

    next();
}
