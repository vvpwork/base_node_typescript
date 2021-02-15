import { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { API, errorHandler } from "../../helpers";

export const verifyPhoneStart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API().post("/account/phone-verify/start", req.body);
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


export const verifyPhoneCheck = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { data } = await API().post("/account/phone-verify/check", req.body);
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
  
