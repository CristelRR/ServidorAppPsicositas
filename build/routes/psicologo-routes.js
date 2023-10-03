"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PsicologoController_1 = require("../controllers/PsicologoController");
class PsicologoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', PsicologoController_1.psicologoController.getPsicologo);
        this.router.get('/:idPsicologo', PsicologoController_1.psicologoController.getByIdPsicologo);
        this.router.post('/', PsicologoController_1.psicologoController.createPsicologo);
        this.router.delete('/:idPsicologo', PsicologoController_1.psicologoController.deletePsicologo);
        this.router.put('/:idPsicologo', PsicologoController_1.psicologoController.updatePsicologo);
    }
}
const psicologoRoutes = new PsicologoRoutes();
exports.default = psicologoRoutes.router;
