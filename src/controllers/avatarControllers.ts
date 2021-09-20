import { Request, Response } from 'express';
import pool from '../database'; 

class avatarControllers {

    public async img(req: Request, res: Response){
        const avatars = await pool.query(`SELECT * FROM Avatars`);
        res.json(avatars);
    }
}

export const AvatarController = new avatarControllers();