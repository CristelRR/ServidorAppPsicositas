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
exports.createCarrera = exports.carreraController = void 0;
const database_1 = __importDefault(require("../database"));
class CarreraController {
    getCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT idCarrera, nomCarrera, area FROM tb_carrera');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCarrera = req.params.idCarrera;
            const resul = yield database_1.default.query('SELECT idCarrera, nomCarrera, area FROM tb_carrera WHERE idCarrera=?', [idCarrera]);
            res.json(resul[0]);
        });
    }
    createCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_carrera SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCarrera = req.params.idCarrera;
            yield database_1.default.query('DELETE FROM tb_carrera WHERE idCarrera=?', [idCarrera]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCarrera } = req.params;
            yield database_1.default.query('UPDATE tb_carrera SET ? WHERE idCarrera = ?', [req.body, idCarrera]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.carreraController = new CarreraController();
const createCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCarrera = req.body;
});
exports.createCarrera = createCarrera;
