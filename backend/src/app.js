import express from "express";
import cors from "cors";
import routes from "./routes.js";
//import errorMiddleware from './middlewares/error.middleware.js';

const app = express();
app.use(cors());
app.use(express.json());

routes(app);

//app.use(errorMiddleware);

export default app;



