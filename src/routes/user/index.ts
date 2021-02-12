import { asyncWrapper } from "../../helpers/asyncWrapper";
import { Joi, celebrate, Segments } from "celebrate";

import { routesPath } from "../../configs";
import { Application } from "express";
export function userRoutes(app: Application) {
  app.post(
    routesPath.userCreate,
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
      }),
    }),
    asyncWrapper((req, res, next) => res.send("Its work"))
  );
}
