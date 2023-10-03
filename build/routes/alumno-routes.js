"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlumnoController_1 = require("../controllers/AlumnoController");
class AlumnoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', AlumnoController_1.alumnoController.getAlumno);
        this.router.get('/:idAlumno', AlumnoController_1.alumnoController.getByIdCarrera);
        this.router.post('/', AlumnoController_1.alumnoController.createAlumno);
        this.router.delete('/:idAlumno', AlumnoController_1.alumnoController.deleteAlumno);
        this.router.put('/:idAlumno', AlumnoController_1.alumnoController.updateAlumno);
    }
}
const alumnoRoutes = new AlumnoRoutes();
exports.default = alumnoRoutes.router;
