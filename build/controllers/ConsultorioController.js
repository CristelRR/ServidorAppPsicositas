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
exports.createConsultorio = exports.consultorioController = void 0;
const database_1 = __importDefault(require("../database"));
class ConsultorioController {
    getConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idConsultorio, nomConsultorio, ubicacion, horaApertura, horaCierre FROM tb_consultorio');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idConsultorio = req.params.idConsultorio;
            const resul = yield database_1.default.query('SELECT idConsultorio, nomConsultorio, ubicacion, horaApertura, horaCierre FROM tb_consultorio WHERE idConsultorio=?', [idConsultorio]);
            res.json(resul[0]);
        });
    }
    createConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_consultorio SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idConsultorio = req.params.idConsultorio;
            yield database_1.default.query('DELETE FROM tb_consultorio WHERE idConsultorio=?', [idConsultorio]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateConsultorio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idConsultorio } = req.params;
            yield database_1.default.query('UPDATE tb_consultorio SET ? WHERE idConsultorio = ?', [req.body, idConsultorio]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.consultorioController = new ConsultorioController();
const createConsultorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newConsultorio = req.body;
});
exports.createConsultorio = createConsultorio;
