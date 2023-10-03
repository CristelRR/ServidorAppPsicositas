import { Request, Response } from "express";
import pool from "../database";

class ConsultorioController{
    async getConsultorio(req:Request, res:Response){
        const resul = await pool.query('SELECT idConsultorio, nomConsultorio, ubicacion, horaApertura, horaCierre FROM tb_consultorio');
        res.json(resul[0]);
    }

    async getByIdCarrera(req:Request, res:Response){
        const idConsultorio = req.params.idConsultorio;
        const resul = await pool.query('SELECT idConsultorio, nomConsultorio, ubicacion, horaApertura, horaCierre FROM tb_consultorio WHERE idConsultorio=?', [idConsultorio]);
        res.json(resul[0]);
    }

    async createConsultorio(req:Request, res:Response){
        await pool.query('INSERT INTO tb_consultorio SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteConsultorio(req:Request, res: Response){
        const idConsultorio = req.params.idConsultorio;
        await pool.query('DELETE FROM tb_consultorio WHERE idConsultorio=?', [idConsultorio]);
        res.json({message:'Registro Eliminado'})
    }

    async updateConsultorio(req:Request, res:Response){
        const{idConsultorio} = req.params;
        await pool.query('UPDATE tb_consultorio SET ? WHERE idConsultorio = ?', [req.body, idConsultorio]);
        res.json({message:'Registro Actualizado'})
    }
}

export const consultorioController = new ConsultorioController();

export const createConsultorio = async (req:Request, res:Response) => {
    const newConsultorio = req.body;
}