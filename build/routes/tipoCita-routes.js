"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoCitaController_1 = require("../controllers/TipoCitaController");
class TipoCitaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', TipoCitaController_1.tipoCitaController.getTipoCita);
        this.router.get('/:idTipoCita', TipoCitaController_1.tipoCitaController.getByIdTipoCita);
        this.router.post('/', TipoCitaController_1.tipoCitaController.createTipoCita);
        this.router.delete('/:idTipoCita', TipoCitaController_1.tipoCitaController.deleteTipoCita);
        this.router.put('/:idTipoCita', TipoCitaController_1.tipoCitaController.updateTipoCita);
    }
}
const tipoCitaRoutes = new TipoCitaRoutes();
exports.default = tipoCitaRoutes.router;
