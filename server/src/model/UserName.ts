import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import uuid from "../util/uuid";
import { ObjectId } from "mongodb";

export const UserNameSchema = new mongoose.Schema({
    uid: {
        type: ObjectId,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        default: uuid().split("-")[0],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const UserName = mongoose.model("UserName", UserNameSchema);

export default UserName;