"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avatarControllers_1 = require("../controllers/avatarControllers");
class AvatarRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', avatarControllers_1.AvatarController.img);
        this.router.get('/:id', avatarControllers_1.AvatarController.imgByID);
    }
}
const avatarRoutes = new AvatarRoutes();
exports.default = avatarRoutes.router;
