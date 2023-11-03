import { Request, Response } from "express";
import pool from "../database";

class AlumnoController{
    //Seleccionar a todos los registros de la tabla
    async getAlumno(req:Request, res:Response){
        const resul = await pool.query('SELECT idAlumno, nombreAlu, apPaternoAlu, apMaternoAlu, telefono, correo, password, idCarrera FROM tb_alumno');
        res.json(resul[0]);
    }

    //Seleccionar a un registro en especial de la tabla "idAlumno"
    async getByIdCarrera(req:Request, res:Response){
        const idAlumno = req.params.idAlumno;
        const resul = await pool.query('SELECT idAlumno, nombreAlu, apPaternoAlu, apMaternoAlu, telefono, correo, password, idCarrera FROM tb_alumno WHERE idAlumno=?', [idAlumno]);
        res.json(resul[0]);
    }

    //Insertar nuevo registro en la tabla
    async createAlumno(req:Request, res:Response){
        await pool.query('INSERT INTO tb_alumno SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    //Eliminar un registro de la tabla por el "idAlumno"
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