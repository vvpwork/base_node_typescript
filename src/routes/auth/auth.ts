import { Request, Response, NextFunction } from "express";
import { API, errorHandler } from "../../helpers";
import createError from "http-errors";

export const getUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({
      authorization: req.headers.authorization,
    }).get("/auth/authenticatedUser/");
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send(data.error.message);
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    const err = errorHandler(error);
    next(createError(error.status || 500, error.message));
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({
      authorization: req.headers.authorization,
    }).post("/auth/login", req.body);
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send(data.error.message);
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    const err = errorHandler(error);
    next(createError(error.status || 500, error.message));
  }
};

export const logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({
      authorization: req.headers.authorization,
    }).post("/auth/logout");
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send(data.error.message);
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    const err = errorHandler(error);
    next(createError(error.status || 500, error.message));
  }
};


export const resendVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = await API({
      authorization: req.headers.authorization,
    }).post("/auth/resendVerification", req.body);
    if (data.hasOwnProperty("error")) {
      res.status(data.error.status).send(data.error.message);
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    const err = errorHandler(error);
    next(createError(error.status || 500, error.message));
  }
};
