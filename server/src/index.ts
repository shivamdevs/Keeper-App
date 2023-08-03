require('dotenv').config();
import mongoose, { ConnectOptions } from "mongoose";
import authRegister from "./auth/register";
import expressApp from "./config";
import mwEmail from "./middleware/mwEmail";
import mwPassword from "./middleware/mwPassword";
import { connectionURL } from "./cloud";


mongoose
    .connect(connectionURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));



expressApp.post("/auth/_/register", mwEmail, mwPassword, authRegister);
expressApp.get("/auth/_/login", mwEmail, mwPassword, authRegister);
expressApp.get("/test", (req, res) => {
    res.json(req.query || {});
});

expressApp.listen(8080, () => {
    console.log("Server started on 8080");
});


