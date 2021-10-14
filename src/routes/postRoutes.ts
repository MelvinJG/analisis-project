import { Router } from 'express'
import { PostController } from '../controllers/postControllers'

class PostRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/Public',PostController.getAllPostsPublic);
        this.router.get('/Private/:userName',PostController.getAllPostsPrivate);
        this.router.post('/',PostController.insertPosts);
    }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;