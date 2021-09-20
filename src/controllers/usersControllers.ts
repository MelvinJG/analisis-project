import { Request, Response } from 'express';
import pool from '../database'; 

class usersControllers {
    public async login(req: Request, res: Response){
        const resp = await pool.query(`SELECT * FROM Users WHERE userName = '${req.params.user}' AND pass = '${req.params.pass}'`);
        console.log(typeof(resp));
        if(Object.keys(resp).length === 0) {
            return res.status(404).json({text: "Error"});
        }
        else{
            return res.json({text: "ENCONTRADO"});
        }
    }

    public async register(req: Request, res: Response){
        await pool.query('INSERT INTO Users SET ?',[req.body]);        
        res.send({text: "REGISTER"});
    }

    public async delete(req: Request, res: Response){
        await pool.query(`DELETE FROM Users WHERE userName = '${req.params.user}'`);
        res.send({text: "DELETED"});
    }

    public async update(req: Request, res: Response){
        await pool.query(`UPDATE Users SET ? WHERE userName = '${req.params.user}'`,[req.body]);
        res.send({text: "UPDATED"});
    }
}

export const UsersController = new usersControllers();