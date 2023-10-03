"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NivelController_1 = require("../controllers/NivelController");
class NivelRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', NivelController_1.nivelController.getNivel);
        this.router.get('/:idNivel', NivelController_1.nivelController.getByIdNivel);
        this.router.post('/', NivelController_1.nivelController.createNivel);
        this.router.delete('/:idNivel', NivelController_1.nivelController.deleteNivel);
        this.router.put('/:idNivel', NivelController_1.nivelController.updateNivel);
    }
}
const nivelRoutes = new NivelRoutes();
exports.default = nivelRoutes.router;
