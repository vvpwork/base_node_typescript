import { Request, Response, NextFunction } from "express";
import { API, errorHandler, passwordAction } from "../../helpers";
import createError from "http-errors";
import { userOperation } from "../../db";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const passwordData = await passwordAction.generate();
    const { data } = await API({}).post("/users/create_new", {
      ...req.body,
      password: passwordData.hashPassword,
    });
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send({
        status: data.error.status,
        data: data.error.message,
      });
      return;
    }

    const userSaved = await userOperation.save({
      email: req.body.email,
      password: passwordData.hashPassword,
    });
    console.log(userSaved)
    res.status(200).send(data);
  } catch (error) {
    const mes = errorHandler(error);
    next(createError(error.code || 500, error.message));
  }
};
