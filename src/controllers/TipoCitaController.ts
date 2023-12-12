import { Request, Response } from "express";
import pool from "../database";

class TipoCitaController{

    async getTipoCita(req:Request, res:Response){
        const resul = await pool.query('SELECT idTipoCita, nombreCita, descripCita, precioCita, imagenUrl FROM tb_tipo_cita');
        res.json(resul[0]);
    }

    async getByIdTipoCita(req:Request, res:Response){
        const idTipoCita = req.params.idTipoCita;
        const resul = await pool.query('SELECT idTipoCita, nombreCita, descripCita, precioCita, imagenUrl FROM tb_tipo_cita WHERE idTipoCita=?', [idTipoCita]);
        res.json(resul[0]);
    }

    async createTipoCita(req:Request, res:Response){
        await pool.query('INSERT INTO tb_tipo_cita SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteTipoCita(req:Request, res: Response){
        const idTipoCita = req.params.idTipoCita;
        await pool.query('DELETE FROM tb_tipo_cita WHERE idTipoCita=?', [idTipoCita]);
        res.json({message:'Registro Eliminado'})
    }

    async updateTipoCita(req:Request, res:Response){
        const{idTipoCita} = req.params;
        await pool.query('UPDATE tb_tipo_cita SET ? WHERE idTipoCita = ?', [req.body, idTipoCita]);
        res.json({message:'Registro Actualizado'})
    }
}

export const tipoCitaController = new TipoCitaController();

export const createTipoCita = async (req:Request, res:Response) => {
    const newTipoCita = req.body;
}