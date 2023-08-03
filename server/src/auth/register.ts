import { NextFunction, Request, Response } from "express";
import isError from "../error/isError";
import errorCodes from "../error";
import UserEntry from "../model/UserEntry";
import UserName from "../model/UserName";

export default async function authRegister(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email || "";
    const password = req.body.password || "";

    // TODO implement authentication and registration logic here

    const existingUser = await UserEntry.findOne({ email });

    if (existingUser) {
        return isError(res, 400, errorCodes.auth.exist);
    }

    const user = await UserEntry.create({ email, password });

    const uid = user._id.toHexString();
    req.body.uid = uid;

    await UserName.create({ uid, email });

    res.json({ true: true });

}
