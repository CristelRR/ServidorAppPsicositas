"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ModalidadController_1 = require("../controllers/ModalidadController");
class ModalidadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ModalidadController_1.modalidadController.getModalidad);
        this.router.get('/:idModalidad', ModalidadController_1.modalidadController.getByIdCarrera);
        this.router.post('/', ModalidadController_1.modalidadController.createModalidad);
        this.router.delete('/:idModalidad', ModalidadController_1.modalidadController.deleteModalidad);
        this.router.put('/:idModalidad', ModalidadController_1.modalidadController.updateModalidad);
    }
}
const modalidadRoutes = new ModalidadRoutes();
exports.default = modalidadRoutes.router;
