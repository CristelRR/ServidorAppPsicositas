import { Request, Response } from "express";
import pool from "../database";

class NivelController{
    async getNivel(req:Request, res:Response){
        const resul = await pool.query('SELECT idNivel, nomNivel, descripcionNivel FROM tb_nivel_urgencia');
        res.json(resul[0]);
    }

    async getByIdNivel(req:Request, res:Response){
        const idNivel = req.params.idNivel;
        const resul = await pool.query('SELECT idNivel, nomNivel, descripcionNivel FROM tb_nivel_urgencia WHERE idNivel=?', [idNivel]);
        res.json(resul[0]);
    }

    async createNivel(req:Request, res:Response){
        await pool.query('INSERT INTO tb_nivel_urgencia SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteNivel(req:Request, res: Response){
        const idNivel = req.params.idNivel;
        await pool.query('DELETE FROM tb_nivel_urgencia WHERE idNivel=?', [idNivel]);
        res.json({message:'Registro Eliminado'})
    }

    async updateNivel(req:Request, res:Response){
        const{idNivel} = req.params;
        await pool.query('UPDATE tb_nivel_urgencia SET ? WHERE idNivel = ?', [req.body, idNivel]);
        res.json({message:'Registro Actualizado'})
    }
}

export const nivelController = new NivelController();

export const createNivel = async (req:Request, res:Response) => {
    const newNivel = req.body;
}