import express, { Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from 'helmet'
// import session from "express-session";
// import redis from "redis";
// import connectRedis from "connect-redis";

import { accountRoutes, authRoutes, userRoutes, walletRoutes } from "../routes";

// ***********************

const app = express();

const err = (req: Request, res: Response, next: NextFunction) => {
  res.statusCode = 404;
  res.end("not found");
  next();
};
//************* session with redis client 
// const RedisStore = connectRedis(session)
// const redisClient = redis.createClient({
//   host: 'localhost',
//   port: 6379
// })
// redisClient.on('error', function (err) {
//   console.log('Could not establish a connection with redis. ' + err);
// });
// redisClient.on('connect', function (err) {
//   console.log('Connected to redis successfully');
// });
// app.use(session({
//   store: new RedisStore({ client: redisClient }),
//   secret: 'box',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       secure: false, // if true only transmit cookie over https
//       httpOnly: false, // if true prevent client side JS from reading the cookie 
//       maxAge: 1000 * 60 * 10 // session max age in miliseconds
//   }
// }))


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet())

// routes
userRoutes(app);
authRoutes(app);
accountRoutes(app);
walletRoutes(app);

app.use(errors());
app.use(err);
export default app;
