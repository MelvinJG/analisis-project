import express, {Application} from 'express';
import morgan from 'morgan'
import cors from 'cors'

import avatarRoutes from './routes/avatarRoutes';
import usersRoutes from './routes/usersRoutes';
import friendsRoutes from './routes/friendsRoutes';
import postRoutes from './routes/postRoutes';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void{
        this.app.use('/Avatars',avatarRoutes);
        this.app.use('/Users',usersRoutes);
        this.app.use('/Friends',friendsRoutes);
        this.app.use('/Posts',postRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('SERVER ON PORT ', this.app.get('port'));
        });
    }
}

const server = new Server(); 
server.start();