import { Router } from "express";
import { alumnoController } from "../controllers/AlumnoController";

class AlumnoRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', alumnoController.getAlumno);
        this.router.get('/:idAlumno', alumnoController.getByIdCarrera);
        this.router.post('/', alumnoController.createAlumno);
        this.router.delete('/:idAlumno', alumnoController.deleteAlumno);
        this.router.put('/:idAlumno', alumnoController.updateAlumno);
    }
}

const alumnoRoutes = new AlumnoRoutes();
    export default alumnoRoutes.router;