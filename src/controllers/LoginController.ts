import { Request, Response } from "express";
import pool from "../database";
import { RowDataPacket } from "mysql2";

interface Usuario{
    idUser: number;
    usuario: string;
    password: string;
}

class LoginController{
    async login(req: Request, res: Response){
        try{
            const{ usuario, password } = req.body;
            console.log('Contraseña recibida', password);

            const [alumnoRows] = await pool.query<RowDataPacket[]>(
                'SELECT * FROM tb_alumno WHERE idAlumno = ?',
                [usuario]
            );

            const [psicologoRows] = await pool.query<RowDataPacket[]>(
                'SELECT * FROM tb_psicologo WHERE idPsicologo = ?',
                [usuario]
            );

            let user = null;

            if(alumnoRows.length>0){
                user=alumnoRows[0] as Usuario;
            }else if(psicologoRows.length>0){
                user=psicologoRows[0] as Usuario;
            }

            if(!user){
                return res.status(401).json({ message:"Credenciales incorrectas"})
            }

            // Verificar la contraseña (asegúrate de que se almacene de forma segura y utiliza bcrypt)
            if (user.password !== password) {
                return res.status(401).json({ message: "Credenciales incorrectas" });
            }

            // Redirigir al home correspondiente
            if (alumnoRows.length > 0) {
                res.json({ message: "Inicio de sesión exitoso como alumno", redirectTo: "agendar-cita" });
            } else if (psicologoRows.length > 0) {
                res.json({ message: "Inicio de sesión exitoso como psicólogo", redirectTo: "home-personal" });
            }
        }catch(error){
            console.log(error);
            res.status(500).json({ message: "Error interno del servidor"});
        }
    }
}

export const loginController = new LoginController();