"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CitaController_1 = require("../controllers/CitaController");
class CitaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CitaController_1.citaController.getCita);
        this.router.get('/:idCita', CitaController_1.citaController.getByIdCarrera);
        this.router.post('/', CitaController_1.citaController.createCita);
        this.router.delete('/:idCita', CitaController_1.citaController.deleteCita);
        this.router.put('/:idCita', CitaController_1.citaController.updateCita);
    }
}
const citaRoutes = new CitaRoutes();
exports.default = citaRoutes.router;
