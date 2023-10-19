import { Request, Response } from "express";
import pool from "../database";

class ConsultarCitaController{
    async getByInfoCita(req:Request, res:Response){
        const{idAlumno}=req.params;
        const resul=await pool.query('SELECT C.idCita, A.idAlumno, A.nombreAlu, A.apPaternoAlu, A.apMaternoAlu, C.status, P.nombrePsi, P.apPaternoPsi, P.apMaternoPsi, M.nomModalidad, N.nomNivel, D.horario, D.fecha, CON.nomConsultorio, CON.ubicacion FROM tb_alumno As A INNER JOIN tb_cita AS C ON A.idAlumno=C.idAlumno INNER JOIN tb_psicologo AS P ON C.idPsicologo = P.idPsicologo INNER JOIN tb_modalidad AS M ON M.idModalidad = C.idModalidad INNER JOIN tb_nivel_urgencia AS N ON C.idNivel = N.idNivel INNER JOIN tb_detalle_consultorio AS D ON D.idCita = C.idCita INNER JOIN tb_consultorio AS CON ON CON.idConsultorio=D.idConsultorio WHERE C.idAlumno = ?', [idAlumno] )
        res.json(resul[0]);
    }
}

export const consultarCitaController = new ConsultarCitaController();
