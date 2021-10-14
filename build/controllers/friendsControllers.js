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
exports.FriendsController = void 0;
const database_1 = __importDefault(require("../database"));
class friendsControllers {
    FriendsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const friends = yield database_1.default.query(`SELECT F.id, F.userName, U.userName, A.img, F.idFriend FROM Friends F 
            INNER JOIN Users U ON F.idFriend = U.id
            INNER JOIN Avatars A ON U.avatar = A.id 
            WHERE F.userName = '${req.params.userName}'`);
            return res.json(friends);
        });
    }
    Chat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mensajes = yield database_1.default.query(`SELECT C.mensage FROM Chat C INNER JOIN Users
        U ON C.idFriend = U.id WHERE U.userName = '${req.params.userName}'`);
            return res.json(mensajes);
        });
    }
    SendMesage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Chat SET ?', [req.body]);
            res.json({ message: 'Send' });
        });
    }
    Solicitudes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mensajes = yield database_1.default.query(`SELECT S.userName, A.img FROM Solicitudes S INNER JOIN 
        Users U ON S.userName = U.userName INNER JOIN 
        Avatars A ON U.avatar = A.id WHERE idFriend = '${req.params.Myid}'`);
            return res.json(mensajes);
        });
    }
    SolicitudesEnviadas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mensajes = yield database_1.default.query(`SELECT U.userName, A.img FROM Solicitudes S 
        INNER JOIN Users U ON S.idFriend = U.id INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE S.userName = '${req.params.userName}'`);
            return res.json(mensajes);
        });
    }
}
exports.FriendsController = new friendsControllers();
