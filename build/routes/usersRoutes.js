"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/People/:user', usersControllers_1.UsersController.getUsers);
        this.router.get('/:user', usersControllers_1.UsersController.getUser);
        this.router.get('/Login/:user/:pass', usersControllers_1.UsersController.login);
        this.router.post('/Register', usersControllers_1.UsersController.register);
        this.router.delete('/Delete/:user', usersControllers_1.UsersController.delete);
        this.router.put('/Update/:user', usersControllers_1.UsersController.update);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
