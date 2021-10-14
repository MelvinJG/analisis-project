import { Request, Response } from 'express';
import pool from '../database'; 

class postControllers {

    public async getAllPostsPublic(req: Request, res: Response){
        const posts = await pool.query(`SELECT P.username, A.img, P.post, P.estado, P.fecha 
        FROM Posts P INNER JOIN Users U ON P.userName = U.userName INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE P.estado = 'Público'`);
        return res.json(posts);
    }

    public async getAllPostsPrivate(req: Request, res: Response){
        const posts = await pool.query(`SELECT P.username, A.img, P.post, P.estado, P.fecha 
        FROM Posts P INNER JOIN Users U ON P.userName = U.userName INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE P.estado = 'Privado' AND P.userName = '${req.params.userName}';`);
        return res.json(posts);
    }

    public async insertPosts(req: Request, res: Response){
        await pool.query(`INSERT INTO Posts SET ?`,[req.body]);
        res.json({ message: 'Guardado' });
    }    
}

export const PostController = new postControllers();