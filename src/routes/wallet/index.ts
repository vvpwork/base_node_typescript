import { Application } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { asyncWrapper } from "../../helpers";
import { createWallet } from "./wallet";

export function walletRoutes(app: Application) {
  app.post(
    "/wallet/create",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        coin: Joi.string().required(),
        wallet_type: Joi.string()
          .valid("crypto", "fiat", "internal")
          .required(),
      }),
    }),
    asyncWrapper(createWallet)
  );
}
