import { Request, Response } from "express";
import pool from "../database";

class ConsultarCitaController{
    async getByInfoCita(req:Request, res:Response){
        const{idAlumno}=req.params;
        const resul=await pool.query('SELECTC.idCita, C.idAlumno, C.status, A.nombreAlu, A.apPaternoAlu, A.apMaternoAlu, P.nombrePsi, P.apPaternoPsi, P.apMaternoPsi, CON.nomConsultorio, CON.ubicacion, M.nomModalidad, DC.fecha, DC.horario FROM tb_detalle_consultorio AS DC INNER JOIN tb_cita AS C ON DC.idCita = C.idCita INNER JOIN tb_consultorio AS CON ON DC.idConsultorio = CON.idConsultorio INNER JOIN tb_psicologo AS P ON DC.idPsicologo = P.idPsicologo INNER JOIN tb_modalidad AS M ON C.idModalidad = M.idModalidad  INNER JOIN tb_nivel_urgencia AS N ON C.idNivel INNER JOIN tb_alumno AS A ON C.idAlumno = A.idAlumno = N.idNivel WHERE idAlumno=?; ', [idAlumno])
        res.json(resul[0]);
    }

}

export const consultarCitaController = new ConsultarCitaController();
