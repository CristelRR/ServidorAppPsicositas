import { Request, Response } from "express";
import pool from "../database";
import { createPool } from "mysql2/promise";


class LoginController {
  async getUsers(req: Request, res: Response) {
    const result = await pool.query("SELECT * FROM tb_usuario");
    res.json(result[0]);
  }

  async getByIdUsr(req: Request, res: Response) {
    const { id_usuario } = req.params;
    const result = await pool.query(
      "SELECT * FROM tb_usuario WHERE id_usuario=?",
      [id_usuario]
    );
    res.json(result[0]);
  }

  // async getUsr(req: Request, res: Response){
  //     const {id_usuario}=req.params;
  //     const {password}=req.params;

  //     const result = await pool.query('SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?', [id_usuario, password]);
  //     res.json(result[0]);
  // }

  async getUser(req: Request, res: Response) {
    const { id_usuario } = req.params;

    const result = await pool.query(
      "SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?",
      [id_usuario, req.body.password]
    );
  }

  async getUsr(req: Request, res: Response) {
    const { id_usuario, password } = req.params;

    try {
      const result = await pool.query(
        "SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?",
        [id_usuario, password]
      );

      if (result[0].length === 0) {
        res.status(404).json({ message: "Usuario o contraseña incorrecto" });
      } else {
        res.json(result[0]);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ message: "Error al procesar la solicitud" });
    }
  }

  async insertUsr (req: Request, res: Response){
    await pool.query('INSERT INTO tb_alumno SET ?', [req.body]);
    res.json({Message: 'Se ha actualizado'});
  }
}

export const loginController = new LoginController;