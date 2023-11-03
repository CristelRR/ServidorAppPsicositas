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
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { usuario, password } = req.body;
                console.log('Contraseña recibida', password);
                const [alumnoRows] = yield database_1.default.query('SELECT * FROM tb_alumno WHERE idAlumno = ?', [usuario]);
                const [psicologoRows] = yield database_1.default.query('SELECT * FROM tb_psicologo WHERE idPsicologo = ?', [usuario]);
                let user = null;
                if (alumnoRows.length > 0) {
                    user = alumnoRows[0];
                }
                else if (psicologoRows.length > 0) {
                    user = psicologoRows[0];
                }
                if (!user) {
                    return res.status(401).json({ message: "Credenciales incorrectas" });
                }
                // Verificar la contraseña (asegúrate de que se almacene de forma segura y utiliza bcrypt)
                if (user.password !== password) {
                    return res.status(401).json({ message: "Credenciales incorrectas" });
                }
                // Redirigir al home correspondiente
                if (alumnoRows.length > 0) {
                    res.json({ message: "Inicio de sesión exitoso como alumno", redirectTo: "agendar-cita" });
                }
                else if (psicologoRows.length > 0) {
                    res.json({ message: "Inicio de sesión exitoso como psicólogo", redirectTo: "home-personal" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Error interno del servidor" });
            }
        });
    }
}
exports.loginController = new LoginController();
