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
exports.createPsicologo = exports.psicologoController = void 0;
const database_1 = __importDefault(require("../database"));
class PsicologoController {
    getPsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idPsicologo, nombrePsi, apPaternoPsi, apMaternoPsi, correo, password FROM tb_psicologo');
            res.json(resul[0]);
        });
    }
    getByIdPsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPsicologo = req.params.idPsicologo;
            const resul = yield database_1.default.query('SELECT idPsicologo, nombrePsi, apPaternoPsi, apMaternoPsi, correo, password WHERE idPsicologo=?', [idPsicologo]);
            res.json(resul[0]);
        });
    }
    createPsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_psicologo SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deletePsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idPsicologo = req.params.idPsicologo;
            yield database_1.default.query('DELETE FROM tb_psicologo WHERE idPsicologo=?', [idPsicologo]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updatePsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPsicologo } = req.params;
            yield database_1.default.query('UPDATE tb_psicologo SET ? WHERE idPsicologo = ?', [req.body, idPsicologo]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.psicologoController = new PsicologoController();
const createPsicologo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPsicologo = req.body;
});
exports.createPsicologo = createPsicologo;
