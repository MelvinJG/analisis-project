"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class FunctionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('HOLIIII'));
    }
}
const indexRoutes = new FunctionRoutes();
exports.default = indexRoutes.router;
