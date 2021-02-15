"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var routes_1 = require("../routes");
var app = express_1.default();
var err = function (req, res, next) {
    res.statusCode = 404;
    res.end("not found");
    next();
};
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(morgan_1.default("combined"));
app.use(helmet_1.default());
routes_1.userRoutes(app);
routes_1.authRoutes(app);
app.use(celebrate_1.errors());
app.use(err);
exports.default = app;
//# sourceMappingURL=app.js.map