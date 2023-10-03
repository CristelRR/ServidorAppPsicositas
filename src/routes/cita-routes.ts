import { Router } from "express";
import { citaController } from "../controllers/CitaController";

class CitaRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', citaController.getCita);
        this.router.get('/:idCita', citaController.getByIdCarrera);
        this.router.post('/', citaController.createCita);
        this.router.delete('/:idCita', citaController.deleteCita);
        this.router.put('/:idCita', citaController.updateCita);
    }
}

const citaRoutes = new CitaRoutes();
    export default citaRoutes.router;