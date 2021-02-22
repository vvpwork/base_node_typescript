import { Application } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { asyncWrapper } from "../../helpers";
import { getUserInfo, loginUser, logoutUser, resendVerification } from "./auth";

export const authRoutes = (app: Application) => {
  app.get(
    "/auth/getUserInfo",
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    }),
    asyncWrapper(getUserInfo)
  );

  app.post(
    "/auth/login",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        otpauth: Joi.string().required(),
        username: Joi.string().email().required(),
      }),
    }),
    asyncWrapper(loginUser)
  );

  app.post(
    "/auth/resendVerification",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        username: Joi.string().email().required(),
      }),
    }),
    asyncWrapper(logoutUser)
  );
  app.post("/auth/resendVerification", asyncWrapper(resendVerification));
};
