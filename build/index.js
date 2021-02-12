"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./src/app/app"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var port = process.env.SERVER_PORT || 8080;
app_1.default.listen(port, function () {
    console.log("The api started on port: " + port);
});
//# sourceMappingURL=index.js.map