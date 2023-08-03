import { CookieOptions, NextFunction, Request, Response } from "express";
import createSecretToken from "../util/createSecretToken";

export default function authAssociate(req: Request, res: Response, next: NextFunction) {
    const token = createSecretToken(req.body.toHexString());

    res.cookie("x-access-token", token, {
        withCredentials: true,
        httpOnly: false,
    } as CookieOptions);

}
