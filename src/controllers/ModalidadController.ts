import { Request, Response } from "express";
import pool from "../database";

class ModalidadController{
    async getModalidad(req:Request, res:Response){
        const resul = await pool.query('SELECT idModalidad, nomModalidad FROM tb_modalidad');
        res.json(resul[0]);
    }

    async getByIdCarrera(req:Request, res:Response){
        const idModalidad = req.params.idModalidad;
        const resul = await pool.query('SELECT idModalidad, nomModalidad FROM tb_modalidad WHERE idModalidad=?', [idModalidad]);
        res.json(resul[0]);
    }

    async createModalidad(req:Request, res:Response){
        await pool.query('INSERT INTO tb_modalidad SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteModalidad(req:Request, res: Response){
        const idModalidad = req.params.idModalidad;
        await pool.query('DELETE FROM tb_modalidad WHERE idModalidad=?', [idModalidad]);
        res.json({message:'Registro Eliminado'})
    }

    async updateModalidad(req:Request, res:Response){
        const{idModalidad} = req.params;
        await pool.query('UPDATE tb_modalidad SET ? WHERE idModalidad = ?', [req.body, idModalidad]);
        res.json({message:'Registro Actualizado'})
    }
}

export const modalidadController = new ModalidadController();

export const createModalidad = async (req:Request, res:Response) => {
    const newModalidad = req.body;
}