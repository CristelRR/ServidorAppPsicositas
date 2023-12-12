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
exports.createTipoCita = exports.tipoCitaController = void 0;
const database_1 = __importDefault(require("../database"));
class TipoCitaController {
    getTipoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idTipoCita, nombreCita, descripCita, precioCita, imagenUrl FROM tb_tipo_cita');
            res.json(resul[0]);
        });
    }
    getByIdTipoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idTipoCita = req.params.idTipoCita;
            const resul = yield database_1.default.query('SELECT idTipoCita, nombreCita, descripCita, precioCita, imagenUrl FROM tb_tipo_cita WHERE idTipoCita=?', [idTipoCita]);
            res.json(resul[0]);
        });
    }
    createTipoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_tipo_cita SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteTipoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idTipoCita = req.params.idTipoCita;
            yield database_1.default.query('DELETE FROM tb_tipo_cita WHERE idTipoCita=?', [idTipoCita]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateTipoCita(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTipoCita } = req.params;
            yield database_1.default.query('UPDATE tb_tipo_cita SET ? WHERE idTipoCita = ?', [req.body, idTipoCita]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.tipoCitaController = new TipoCitaController();
const createTipoCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTipoCita = req.body;
});
exports.createTipoCita = createTipoCita;
