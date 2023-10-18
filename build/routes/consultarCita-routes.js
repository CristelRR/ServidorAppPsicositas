"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultarCitaController_1 = require("../controllers/ConsultarCitaController");
class ConsultarCitaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ConsultarCitaController_1.consultarCitaController.getByInfoCita);
    }
}
const consultarCitaRoutes = new ConsultarCitaRoutes();
exports.default = consultarCitaRoutes.router;
