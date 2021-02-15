import { Request, Response, NextFunction } from "express";
import { API, errorHandler } from "../../helpers";
import createError from "http-errors";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({}).post("/users/create_new", req.body);
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send(data.error.message);
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    const mes = errorHandler(error);
    next(createError(error.code || 500, error.message));
  }
};
