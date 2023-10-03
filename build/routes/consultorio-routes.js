"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConsultorioController_1 = require("../controllers/ConsultorioController");
class ConsultorioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ConsultorioController_1.consultorioController.getConsultorio);
        this.router.get('/:idConsultorio', ConsultorioController_1.consultorioController.getByIdCarrera);
        this.router.post('/', ConsultorioController_1.consultorioController.createConsultorio);
        this.router.delete('/:idConsultorio', ConsultorioController_1.consultorioController.deleteConsultorio);
        this.router.put('/:idConsultorio', ConsultorioController_1.consultorioController.updateConsultorio);
    }
}
const consultorioRoutes = new ConsultorioRoutes();
exports.default = consultorioRoutes.router;
