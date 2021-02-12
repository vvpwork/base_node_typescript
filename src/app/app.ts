import express, { Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { userRoutes } from "../routes";

// ***********************
const app = express();
const err = (req: Request, res: Response, next: NextFunction) => {
  res.statusCode = 404;
  res.end("not found");
  next();
};

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
// routes
userRoutes(app);
app.use(errors());
app.use(err);
export default app;
