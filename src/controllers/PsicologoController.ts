import { Request, Response } from "express";
import pool from "../database";

class PsicologoController{

    async getPsicologo(req:Request, res:Response){
        const resul = await pool.query('SELECT idPsicologo, nombrePsi, apPaternoPsi, apMaternoPsi, correo, password FROM tb_psicologo');
        res.json(resul[0]);
    }

    async getByIdPsicologo(req:Request, res:Response){
        const idPsicologo = req.params.idPsicologo;
        const resul = await pool.query('SELECT idPsicologo, nombrePsi, apPaternoPsi, apMaternoPsi, correo, password FROM tb_psicologo WHERE idPsicologo=?', [idPsicologo]);
        res.json(resul[0]);
    }

    async createPsicologo(req:Request, res:Response){
        await pool.query('INSERT INTO tb_psicologo SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deletePsicologo(req:Request, res: Response){
        const idPsicologo = req.params.idPsicologo;
        await pool.query('DELETE FROM tb_psicologo WHERE idPsicologo=?', [idPsicologo]);
        res.json({message:'Registro Eliminado'})
    }

    async updatePsicologo(req:Request, res:Response){
        const{idPsicologo} = req.params;
        await pool.query('UPDATE tb_psicologo SET ? WHERE idPsicologo = ?', [req.body, idPsicologo]);
        res.json({message:'Registro Actualizado'})
    }
}

export const psicologoController = new PsicologoController();

export const createPsicologo = async (req:Request, res:Response) => {
    const newPsicologo = req.body;
}