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
exports.createModalidad = exports.modalidadController = void 0;
const database_1 = __importDefault(require("../database"));
class ModalidadController {
    getModalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idModalidad, nomModalidad FROM tb_modalidad');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idModalidad = req.params.idModalidad;
            const resul = yield database_1.default.query('SELECT idModalidad, nomModalidad FROM tb_modalidad WHERE idModalidad=?', [idModalidad]);
            res.json(resul[0]);
        });
    }
    createModalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_modalidad SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteModalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idModalidad = req.params.idModalidad;
            yield database_1.default.query('DELETE FROM tb_modalidad WHERE idModalidad=?', [idModalidad]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateModalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idModalidad } = req.params;
            yield database_1.default.query('UPDATE tb_modalidad SET ? WHERE idModalidad = ?', [req.body, idModalidad]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.modalidadController = new ModalidadController();
const createModalidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newModalidad = req.body;
});
exports.createModalidad = createModalidad;
