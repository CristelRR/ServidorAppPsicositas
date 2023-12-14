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
exports.loginController = void 0;
const database_1 = __importDefault(require("../database"));
class LoginController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query("SELECT * FROM tb_usuario");
            res.json(result[0]);
        });
    }
    getByIdUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.params;
            const result = yield database_1.default.query("SELECT * FROM tb_usuario WHERE id_usuario=?", [id_usuario]);
            res.json(result[0]);
        });
    }
    // async getUsr(req: Request, res: Response){
    //     const {id_usuario}=req.params;
    //     const {password}=req.params;
    //     const result = await pool.query('SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?', [id_usuario, password]);
    //     res.json(result[0]);
    // }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.params;
            const result = yield database_1.default.query("SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?", [id_usuario, req.body.password]);
        });
    }
    getUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario, password } = req.params;
            try {
                const result = yield database_1.default.query("SELECT * FROM tb_usuario WHERE id_usuario=? AND password=?", [id_usuario, password]);
                if (result[0].length === 0) {
                    res.status(404).json({ message: "Usuario o contraseña incorrecto" });
                }
                else {
                    res.json(result[0]);
                }
            }
            catch (error) {
                console.error("Error al iniciar sesión:", error);
                res.status(500).json({ message: "Error al procesar la solicitud" });
            }
        });
    }
    insertUsr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_alumno SET ?', [req.body]);
            res.json({ Message: 'Se ha actualizado' });
        });
    }
}
exports.loginController = new LoginController;
