"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postControllers_1 = require("../controllers/postControllers");
class PostRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/Public', postControllers_1.PostController.getAllPostsPublic);
        this.router.get('/Private/:userName', postControllers_1.PostController.getAllPostsPrivate);
        this.router.post('/', postControllers_1.PostController.insertPosts);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
