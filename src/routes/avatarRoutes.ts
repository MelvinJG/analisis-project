import { Router } from 'express'
import { AvatarController } from '../controllers/avatarControllers'

class AvatarRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', AvatarController.img);
        this.router.get('/:id', AvatarController.imgByID);
    }
}

const avatarRoutes = new AvatarRoutes();
export default avatarRoutes.router;