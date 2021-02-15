"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var celebrate_1 = require("celebrate");
var asyncWrapper_1 = require("../../helpers/asyncWrapper");
var createUser_1 = require("./createUser");
var configs_1 = require("../../configs");
function userRoutes(app) {
    var _a;
    app.post(configs_1.routesPath.userCreate, celebrate_1.celebrate((_a = {},
        _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
            title: celebrate_1.Joi.string(),
            gender: celebrate_1.Joi.string().valid('M', 'F').required(),
            email: celebrate_1.Joi.string().email().required(),
            password: celebrate_1.Joi.string().required(),
            first_name: celebrate_1.Joi.string(),
            last_name: celebrate_1.Joi.string(),
            dateOfBirth: celebrate_1.Joi.string().isoDate(),
            addressLine1: celebrate_1.Joi.string(),
            addressLine2: celebrate_1.Joi.string(),
            country_code: celebrate_1.Joi.string(),
            phone_number: celebrate_1.Joi.string(),
            cityOrTown: celebrate_1.Joi.string(),
            postcode: celebrate_1.Joi.string(),
            countryName: celebrate_1.Joi.string(),
            selected_country: celebrate_1.Joi.string(),
        }),
        _a)), asyncWrapper_1.asyncWrapper(createUser_1.createUser));
}
exports.userRoutes = userRoutes;
//# sourceMappingURL=index.js.map