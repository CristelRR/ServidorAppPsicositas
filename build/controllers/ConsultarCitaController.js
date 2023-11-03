"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarCitaController = void 0;
const database_1 = __importDefault(require("../database"));
class ConsultarCitaController {
    getByInfoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idAlumno } = req.params;
            const resul = yield database_1.default.query('SELECT C.idCita, A.idAlumno, A.nombreAlu, A.apPaternoAlu, A.apMaternoAlu, C.status, P.nombrePsi, P.apPaternoPsi, P.apMaternoPsi, M.nomModalidad, N.nomNivel, D.horario,  DAY(D.fecha) AS dia, MONTH(D.fecha) AS mes, YEAR(D.fecha) AS anio, CON.nomConsultorio, CON.ubicacion FROM tb_alumno As A INNER JOIN tb_cita AS C ON A.idAlumno=C.idAlumno INNER JOIN tb_psicologo AS P ON C.idPsicologo = P.idPsicologo INNER JOIN tb_modalidad AS M ON M.idModalidad = C.idModalidad INNER JOIN tb_nivel_urgencia AS N ON C.idNivel = N.idNivel INNER JOIN tb_detalle_consultorio AS D ON D.idCita = C.idCita INNER JOIN tb_consultorio AS CON ON CON.idConsultorio=D.idConsultorio WHERE C.idAlumno = ?', [idAlumno]);
            res.json(resul[0]);
        });
    }
}
exports.consultarCitaController = new ConsultarCitaController();
