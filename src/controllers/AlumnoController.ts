import { Request, Response } from "express";
import pool from "../database";

class AlumnoController{
    async getAlumno(req:Request, res:Response){
        const resul = await pool.query('SELECT idAlumno, nombreAlu, apPaternoAlu, apMaternoAlu, telefono, correo, password, idCarrera FROM tb_alumno');
        res.json(resul[0]);
    }

    async getByIdCarrera(req:Request, res:Response){
        const idAlumno = req.params.idAlumno;
        const resul = await pool.query('SELECT idAlumno, nombreAlu, apPaternoAlu, apMaternoAlu, telefono, correo, password, idCarrera FROM tb_alumno WHERE idAlumno=?', [idAlumno]);
        res.json(resul[0]);
    }

    async createAlumno(req:Request, res:Response){
        await pool.query('INSERT INTO tb_alumno SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteAlumno(req:Request, res: Response){
        const idAlumno = req.params.idAlumno;
        await pool.query('DELETE FROM tb_alumno WHERE idAlumno=?', [idAlumno]);
        res.json({message:'Registro Eliminado'})
    }

    async updateAlumno(req:Request, res:Response){
        const{idAlumno} = req.params;
        await pool.query('UPDATE tb_alumno SET ? WHERE idAlumno = ?', [req.body, idAlumno]);
        res.json({message:'Registro Actualizado'})
    }
}

export const alumnoController = new AlumnoController();

export const createAlumno = async (req:Request, res:Response) => {
    const newAlumno = req.body;
}