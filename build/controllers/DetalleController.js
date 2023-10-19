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
exports.createDetalle = exports.detalleController = void 0;
const database_1 = __importDefault(require("../database"));
class DetalleController {
    getDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio');
            res.json(resul[0]);
        });
    }
    getByIdDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idConsultorio, idPsicologo, idCita } = req.params;
            const result = yield database_1.default.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio WHERE idConsultorio = ? AND idPsicologo = ? AND idCita = ?', [idConsultorio, idPsicologo, idCita]);
            res.json(result[0]);
        });
    }
    createDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_detalle_consultorio SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PRIMARY = req.params.idDetalle;
            yield database_1.default.query('DELETE FROM tb_detalle_consultorio WHERE PRIMARY=?', [PRIMARY]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { PRIMARY } = req.params;
            yield database_1.default.query('UPDATE tb_detalle_consultorio SET ? WHERE PRIMARY = ?', [req.body, PRIMARY]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.detalleController = new DetalleController();
const createDetalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDetalle = req.body;
});
exports.createDetalle = createDetalle;
