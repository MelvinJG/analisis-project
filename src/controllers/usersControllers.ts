import { Request, Response } from 'express';
import pool from '../database'; 

class usersControllers {
    public async getUsers(req: Request, res: Response){
        const resp = await pool.query(`SELECT U.userName, A.img FROM Users U INNER JOIN Avatars A ON U.avatar = A.id WHERE U.id NOT IN ( SELECT idFriend FROM Friends WHERE userName = '${req.params.user}');`);        
        return res.json(resp);
    }

    public async getUser(req: Request, res: Response){
        const resp = await pool.query(`SELECT * FROM Users WHERE userName = '${req.params.user}'`);        
        return res.json(resp);
    }

    public async login(req: Request, res: Response){
        const resp = await pool.query(`SELECT * FROM Users WHERE userName = '${req.params.user}' AND pass = '${req.params.pass}'`);        
        if(Object.keys(resp).length === 0) {
            return res.send(false);
        }
        else{
            return res.send(true);
        }
    }

    public async register(req: Request, res: Response) : Promise<void>{
        await pool.query('INSERT INTO Users SET ?',[req.body]);        
        res.json({ message: 'Register' });
    }

    public async delete(req: Request, res: Response){
        await pool.query(`DELETE FROM Users WHERE userName = '${req.params.user}'`);
        res.send({text: "DELETED"});
    }

    public async update(req: Request, res: Response){
        await pool.query(`UPDATE Users SET ? WHERE userName = '${req.params.user}'`,[req.body]);
        res.send({text: "UPDATED"});
    }

    public async MyIdUser(req: Request, res: Response){
        const friends = await pool.query(`SELECT id FROM Users WHERE userName = '${req.params.userName}'`);
        return res.json(friends);
    }
}

export const UsersController = new usersControllers();