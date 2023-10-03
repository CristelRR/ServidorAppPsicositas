import { Request, Response } from "express";
import pool from "../database";

class CarreraController{
    async getCarrera(req:Request, res:Response){
        const resul = await pool.query('SELECT idCarrera, nomCarrera, area FROM tb_carrera');
        res.json(resul[0]);
    }

    async getByIdCarrera(req:Request, res:Response){
        const idCarrera = req.params.idCarrera;
        const resul = await pool.query('SELECT idCarrera, nomCarrera, area FROM tb_carrera WHERE idCarrera=?', [idCarrera]);
        res.json(resul[0]);
    }

    async createCarrera(req:Request, res:Response){
        await pool.query('INSERT INTO tb_carrera SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteCarrera(req:Request, res: Response){
        const idCarrera = req.params.idCarrera;
        await pool.query('DELETE FROM tb_carrera WHERE idCarrera=?', [idCarrera]);
        res.json({message:'Registro Eliminado'})
    }

    async updateCarrera(req:Request, res:Response){
        const{idCarrera} = req.params;
        await pool.query('UPDATE tb_carrera SET ? WHERE idCarrera = ?', [req.body, idCarrera]);
        res.json({message:'Registro Actualizado'})
    }
}

export const carreraController = new CarreraController();

export const createCarrera = async (req:Request, res:Response) => {
    const newCarrera = req.body;
}