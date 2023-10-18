"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DetalleController_1 = require("../controllers/DetalleController");
class DetalleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', DetalleController_1.detalleController.getDetalle);
        this.router.get('/:PRIMARY', DetalleController_1.detalleController.getByIdDetalle);
        this.router.post('/', DetalleController_1.detalleController.createDetalle);
        this.router.delete('/:PRIMARY', DetalleController_1.detalleController.deleteDetalle);
        this.router.put('/:PRIMARY', DetalleController_1.detalleController.updateDetalle);
    }
}
const detalleRoutes = new DetalleRoutes();
exports.default = detalleRoutes.router;
