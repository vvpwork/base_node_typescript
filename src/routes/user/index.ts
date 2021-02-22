import { Application } from "express";
import { Joi, celebrate, Segments } from "celebrate";
import { asyncWrapper } from "../../helpers/asyncWrapper";
import { createUser } from "./createUser";
import { routesPath } from "../../configs";


export function userRoutes(app: Application) {
  app.post(
    routesPath.userCreate,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string(),
        gender: Joi.string().valid('M', 'F').required(),
        email: Joi.string().email().required(),
        first_name: Joi.string(),
        last_name: Joi.string(),
        dateOfBirth: Joi.string().isoDate(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string(),
        country_code: Joi.string(),
        phone_number: Joi.string(),
        cityOrTown: Joi.string(),
        postcode: Joi.string(),
        countryName: Joi.string(),
        selected_country: Joi.string(),
      }),
    }),
    asyncWrapper(createUser)
  );
}
