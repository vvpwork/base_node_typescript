import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { errorHandler, API } from "../../helpers";

export const createWallet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({ authorization: req.headers.authorization }).post(
      "/user/addresses/create",
      req.body
    );
    if (data.hasOwnProperty("error")) {
        res.status(data.error.status).send(data.error.message);
        return;
      }
      res.status(200).send(data);
  } catch (error) {
    errorHandler(error);
    next(createError(error.status || 500, error.message));
  }
};
