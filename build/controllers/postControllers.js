"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const database_1 = __importDefault(require("../database"));
class postControllers {
    getAllPostsPublic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield database_1.default.query(`SELECT P.username, A.img, P.post, P.estado, P.fecha 
        FROM Posts P INNER JOIN Users U ON P.userName = U.userName INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE P.estado = 'Público'`);
            return res.json(posts);
        });
    }
    getAllPostsPrivate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield database_1.default.query(`SELECT P.username, A.img, P.post, P.estado, P.fecha 
        FROM Posts P INNER JOIN Users U ON P.userName = U.userName INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE P.estado = 'Privado' AND P.userName = '${req.params.userName}';`);
            return res.json(posts);
        });
    }
    insertPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`INSERT INTO Posts SET ?`, [req.body]);
            res.json({ message: 'Guardado' });
        });
    }
}
exports.PostController = new postControllers();
