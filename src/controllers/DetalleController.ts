import { Request, Response } from "express";
import pool from "../database";

class DetalleController{
    async getDetalle(req:Request, res:Response){
        const resul = await pool.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio');
        res.json(resul[0]);
    }

    async getByIdDetalle(req:Request, res:Response){
        const PRIMARY = req.params.idDetalle;
        const resul = await pool.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio WHERE PRIMARY=?', [PRIMARY]);
        res.json(resul[0]);
    }

    async createDetalle(req:Request, res:Response){
        await pool.query('INSERT INTO tb_detalle_consultorio SET ?', [req.body]);
        res.json({message:'Registro guardado'});
    }

    async deleteDetalle(req:Request, res: Response){
        const PRIMARY = req.params.idDetalle;
        await pool.query('DELETE FROM tb_detalle_consultorio WHERE PRIMARY=?', [PRIMARY]);
        res.json({message:'Registro Eliminado'});
    }

    async updateDetalle(req:Request, res:Response){
        const{PRIMARY} = req.params;
        await pool.query('UPDATE tb_detalle_consultorio SET ? WHERE PRIMARY = ?', [req.body, PRIMARY]);
        res.json({message:'Registro Actualizado'});
    }    
}

export const detalleController = new DetalleController();

export const createDetalle = async (req:Request, res:Response) => {
    const newDetalle = req.body;
}