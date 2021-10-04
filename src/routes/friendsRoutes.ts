import { Router } from 'express'
import { FriendsController } from '../controllers/friendsControllers'

class FriendsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/:userName',FriendsController.FriendsByUser);
        this.router.get('/Chat/:userName',FriendsController.Chat);
        this.router.post('/SendMesage',FriendsController.SendMesage);
    }
}

const friendsRoutes = new FriendsRoutes();
export default friendsRoutes.router;