import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import uuid from "../util/uuid";
import { ObjectId } from "mongodb";

export const UserDataSchema = new mongoose.Schema({
    uid: {
        type: ObjectId,
        required: true,
        unique: true,
    },
    displayName: {
        type: String,
        required: true,
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
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    profile: String,
});

const UserData = mongoose.model("UserData", UserDataSchema);

export default UserData;