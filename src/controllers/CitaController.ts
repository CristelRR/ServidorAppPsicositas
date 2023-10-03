import { Request, Response } from "express";
import pool from "../database";

class CitaController{
    async getCita(req:Request, res:Response){
        const resul = await pool.query('SELECT idCita, motivo, status, idAlumno, idPsicologo, idNivel, idModalidad FROM tb_cita');
        res.json(resul[0]);
    }

    async getByIdCarrera(req:Request, res:Response){
        const idCita = req.params.idCita;
        const resul = await pool.query('SELECT idCita, motivo, status, idAlumno, idPsicologo, idNivel, idModalidad FROM tb_cita WHERE idCita=?', [idCita]);
        res.json(resul[0]);
    }

    async createCita(req:Request, res:Response){
        await pool.query('INSERT INTO tb_cita SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteCita(req:Request, res: Response){
        const idCita = req.params.idCita;
        await pool.query('DELETE FROM tb_cita WHERE idCita=?', [idCita]);
        res.json({message:'Registro Eliminado'})
    }

    async updateCita(req:Request, res:Response){
        const{idCita} = req.params;
        await pool.query('UPDATE tb_cita SET ? WHERE idCita = ?', [req.body, idCita]);
        res.json({message:'Registro Actualizado'})
    }
}

export const citaController = new CitaController();

export const createCita = async (req:Request, res:Response) => {
    const newCita = req.body;
}