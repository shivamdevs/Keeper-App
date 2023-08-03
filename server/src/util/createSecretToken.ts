import jwt from "jsonwebtoken";

export default function createSecretToken(id: string) {
    console.log(id);
    
    return jwt.sign({ id }, process.env.JWT_TOKEN_KEY as string, {
        expiresIn: 3 * 24 * 60 * 60,
    });
};