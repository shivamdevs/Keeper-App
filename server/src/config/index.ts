import cookieParser from 'cookie-parser';
import express, { Express } from 'express';
import cors from 'cors';

const expressApp: Express = express();

expressApp.use(cookieParser());
expressApp.use(express.json());
expressApp.use(cors({
    origin: [`http://localhost:3000`, `https://localhost:4000`],
    credentials: true,
}));

export default expressApp;