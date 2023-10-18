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
exports.createNivel = exports.nivelController = void 0;
const database_1 = __importDefault(require("../database"));
class NivelController {
    getNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idNivel, nomNivel, descripcionNivel FROM tb_nivel_urgencia');
            res.json(resul[0]);
        });
    }
    getByIdNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNivel = req.params.idNivel;
            const resul = yield database_1.default.query('SELECT idNivel, nomNivel, descripcionNivel FROM tb_nivel_urgencia WHERE idNivel=?', [idNivel]);
            res.json(resul[0]);
        });
    }
    createNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_nivel_urgencia SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNivel = req.params.idNivel;
            yield database_1.default.query('DELETE FROM tb_nivel_urgencia WHERE idNivel=?', [idNivel]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateNivel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idNivel } = req.params;
            yield database_1.default.query('UPDATE tb_nivel_urgencia SET ? WHERE idNivel = ?', [req.body, idNivel]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.nivelController = new NivelController();
const createNivel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newNivel = req.body;
});
exports.createNivel = createNivel;
