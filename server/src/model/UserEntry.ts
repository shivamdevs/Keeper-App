import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export const UserEntrySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserEntrySchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const UserEntry = mongoose.model("UserEntry", UserEntrySchema);

export default UserEntry;