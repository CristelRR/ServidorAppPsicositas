"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarreraConttroller_1 = require("../controllers/CarreraConttroller");
class CarreraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CarreraConttroller_1.carreraController.getCarrera);
        this.router.get('/:idCarrera', CarreraConttroller_1.carreraController.getByIdCarrera);
        this.router.post('/', CarreraConttroller_1.carreraController.createCarrera);
        this.router.delete('/:idCarrera', CarreraConttroller_1.carreraController.deleteCarrera);
        this.router.put('/:idCarrera', CarreraConttroller_1.carreraController.updateCarrera);
    }
}
const carreraRoutes = new CarreraRoutes();
exports.default = carreraRoutes.router;
