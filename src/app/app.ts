import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import { userRoutes } from '../routes';

// ***********************

const app = express();

const err = (req: Request, res: Response, next: NextFunction): any => {
  res.statusCode = 404;
  res.send({
    status: 404,
    data: 'Bad request page not found',
  });
  next();
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(helmet());

// routes
userRoutes(app);

app.use(errors());
app.use(err);
export default app;
