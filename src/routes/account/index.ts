import { Application } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { asyncWrapper } from "../../helpers";
import { verifyPhoneCheck, verifyPhoneStart } from "./account";

export function accountRoutes(app: Application) {
  app.post(
    "/account/phoneStart",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        country_code: Joi.string().required(),
        phone_number: Joi.string().required(),
        via: Joi.string().valid("sms", "call").required(),
      }),
    }),
    asyncWrapper(verifyPhoneStart)
  );
  app.post(
    "/account/phoneCheck",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        country_code: Joi.string().required(),
        phone_number: Joi.string().required(),
        verification_code: Joi.string().required(),
      }),
    }),
    asyncWrapper(verifyPhoneCheck)
  );
}
