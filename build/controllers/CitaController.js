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
exports.createCita = exports.citaController = void 0;
const database_1 = __importDefault(require("../database"));
class CitaController {
    getCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idCita, motivo, status, idAlumno, idPsicologo, idNivel, idModalidad FROM tb_cita');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCita = req.params.idCita;
            const resul = yield database_1.default.query('SELECT idCita, motivo, status, idAlumno, idPsicologo, idNivel, idModalidad FROM tb_cita WHERE idCita=?', [idCita]);
            res.json(resul[0]);
        });
    }
    createCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_cita SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCita = req.params.idCita;
            yield database_1.default.query('DELETE FROM tb_cita WHERE idCita=?', [idCita]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCita } = req.params;
            yield database_1.default.query('UPDATE tb_cita SET ? WHERE idCita = ?', [req.body, idCita]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.citaController = new CitaController();
const createCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCita = req.body;
});
exports.createCita = createCita;
