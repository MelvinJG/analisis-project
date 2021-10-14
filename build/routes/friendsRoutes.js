"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const friendsControllers_1 = require("../controllers/friendsControllers");
class FriendsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:userName', friendsControllers_1.FriendsController.FriendsByUser);
        this.router.get('/Chat/:userName', friendsControllers_1.FriendsController.Chat);
        this.router.post('/SendMesage', friendsControllers_1.FriendsController.SendMesage);
        this.router.get('/Solicitudes/:Myid', friendsControllers_1.FriendsController.Solicitudes);
        this.router.get('/EnviadaSolicitud/:userName', friendsControllers_1.FriendsController.SolicitudesEnviadas);
    }
}
const friendsRoutes = new FriendsRoutes();
exports.default = friendsRoutes.router;
