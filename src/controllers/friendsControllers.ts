import { Request, Response } from 'express';
import pool from '../database'; 

class friendsControllers {

    public async FriendsByUser(req: Request, res: Response){
        const friends = await pool.query(`SELECT F.id, F.userName, U.userName, A.img, F.idFriend FROM Friends F 
            INNER JOIN Users U ON F.idFriend = U.id
            INNER JOIN Avatars A ON U.avatar = A.id 
            WHERE F.userName = '${req.params.userName}'`);
        return res.json(friends);
    }

    public async Chat(req: Request, res: Response){
        const mensajes = await pool.query(`SELECT C.mensage FROM Chat C INNER JOIN Users
        U ON C.idFriend = U.id WHERE U.userName = '${req.params.userName}'`);
        return res.json(mensajes);
        
    }
    
    public async SendMesage(req: Request, res: Response){
        await pool.query('INSERT INTO Chat SET ?',[req.body]);
        res.json({ message: 'Send' });        
    }

    public async Solicitudes(req: Request, res: Response){
        const mensajes = await pool.query(`SELECT S.userName, A.img FROM Solicitudes S INNER JOIN 
        Users U ON S.userName = U.userName INNER JOIN 
        Avatars A ON U.avatar = A.id WHERE idFriend = '${req.params.Myid}'`);
        return res.json(mensajes);        
    }

    public async SolicitudesEnviadas(req: Request, res: Response){
        const mensajes = await pool.query(`SELECT U.userName, A.img FROM Solicitudes S 
        INNER JOIN Users U ON S.idFriend = U.id INNER JOIN Avatars A ON 
        U.avatar = A.id WHERE S.userName = '${req.params.userName}'`);
        return res.json(mensajes);        
    }
}

export const FriendsController = new friendsControllers();