"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const avatarRoutes_1 = __importDefault(require("./routes/avatarRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const friendsRoutes_1 = __importDefault(require("./routes/friendsRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/Avatars', avatarRoutes_1.default);
        this.app.use('/Users', usersRoutes_1.default);
        this.app.use('/Friends', friendsRoutes_1.default);
        this.app.use('/Posts', postRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
