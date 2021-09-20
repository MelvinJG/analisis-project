"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRegController = void 0;
const database_1 = __importDefault(require("../database"));
class logregControllers {
    login(req, res) {
        //res.send('LOGRIN AN REGISTER MELVIN PRO');
        database_1.default.query('SELECT * FROM Users');
        res.send("LOGIN");
    }
    register(req, res) {
        //res.send('LOGRIN AN REGISTER MELVIN PRO');
        database_1.default.query('SELECT * FROM Users');
        res.send("REGISTER");
    }
    delete(req, res) {
        database_1.default.query('SELECT * FROM Users');
        res.send("DELETE");
    }
}
exports.LogRegController = new logregControllers();
