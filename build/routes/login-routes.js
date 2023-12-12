"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../controllers/LoginController");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LoginController_1.loginController.getUsers);
        this.router.get('/:id_usuario', LoginController_1.loginController.getByIdUsr);
        this.router.get('/:id_usuario/:password', LoginController_1.loginController.getUsr);
        this.router.post('/:id_usuario', LoginController_1.loginController.getUser);
        this.router.post('/:id_usuario/:password', LoginController_1.loginController.getUsr);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
