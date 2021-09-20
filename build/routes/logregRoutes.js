"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logregControllers_1 = require("../controllers/logregControllers");
class LogRegRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/Login', logregControllers_1.LogRegController.login);
        this.router.post('/Register', logregControllers_1.LogRegController.register);
    }
}
const logregRoutes = new LogRegRoutes();
exports.default = logregRoutes.router;
