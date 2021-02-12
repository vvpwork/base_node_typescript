"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var asyncWrapper_1 = require("../../helpers/asyncWrapper");
var configs_1 = require("../../configs");
function userRoutes(app) {
    app.get(configs_1.routesPath.userCreate, asyncWrapper_1.asyncWrapper(function (req, res, next) { return res.send("Its work"); }));
}
exports.userRoutes = userRoutes;
//# sourceMappingURL=index.js.map