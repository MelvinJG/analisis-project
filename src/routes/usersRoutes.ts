import { Router } from 'express'
import { UsersController } from '../controllers/usersControllers'

class UsersRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/Login/:user/:pass', UsersController.login);
        this.router.post('/Register', UsersController.register);
        this.router.delete('/Delete/:user', UsersController.delete);
        this.router.put('/Update/:user', UsersController.update);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;