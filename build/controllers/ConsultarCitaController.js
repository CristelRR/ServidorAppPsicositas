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
            const resul = yield database_1.default.query('SELECTC.idCita, C.idAlumno, C.status, A.nombreAlu, A.apPaternoAlu, A.apMaternoAlu, P.nombrePsi, P.apPaternoPsi, P.apMaternoPsi, CON.nomConsultorio, CON.ubicacion, M.nomModalidad, DC.fecha, DC.horario FROM tb_detalle_consultorio AS DC INNER JOIN tb_cita AS C ON DC.idCita = C.idCita INNER JOIN tb_consultorio AS CON ON DC.idConsultorio = CON.idConsultorio INNER JOIN tb_psicologo AS P ON DC.idPsicologo = P.idPsicologo INNER JOIN tb_modalidad AS M ON C.idModalidad = M.idModalidad  INNER JOIN tb_nivel_urgencia AS N ON C.idNivel INNER JOIN tb_alumno AS A ON C.idAlumno = A.idAlumno = N.idNivel WHERE idAlumno=?; ', [idAlumno]);
            res.json(resul[0]);
        });
    }
}
exports.consultarCitaController = new ConsultarCitaController();
