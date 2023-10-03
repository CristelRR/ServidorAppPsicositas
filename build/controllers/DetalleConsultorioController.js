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
exports.createDetalleConsultorio = exports.detalleconsultorioController = void 0;
const database_1 = __importDefault(require("../database"));
class DetalleConsultorioController {
    getDetalleConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idDetalleDetalleConsultorio = req.params.idDetalleConsultorio;
            const resul = yield database_1.default.query('SELECT horario, fecha, status, idConsultorio, idPsicologo, idCita FROM tb_detalle_consultorio WHERE idDetalleConsultorio=?', []);
            res.json(resul[0]);
        });
    }
    createDetalleConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_detalle_consultorio SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteDetalleConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idDetalleConsultorio = req.params.idDetalleConsultorio;
            yield database_1.default.query('DELETE FROM tb_detalle_consultorio WHERE idDetalleConsultorio=?', [idDetalleConsultorio]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateDetalleConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDetalleConsultorio } = req.params;
            yield database_1.default.query('UPDATE tb_detalleconsultorio SET ? WHERE idDetalleConsultorio = ?', [req.body, idDetalleConsultorio]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.detalleconsultorioController = new DetalleConsultorioController();
const createDetalleConsultorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDetalleConsultorio = req.body;
});
exports.createDetalleConsultorio = createDetalleConsultorio;
