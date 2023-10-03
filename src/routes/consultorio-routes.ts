import { Router } from "express";
import { consultorioController } from "../controllers/ConsultorioController";

class ConsultorioRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', consultorioController.getConsultorio);
        this.router.get('/:idConsultorio', consultorioController.getByIdCarrera);
        this.router.post('/', consultorioController.createConsultorio);
        this.router.delete('/:idConsultorio', consultorioController.deleteConsultorio);
        this.router.put('/:idConsultorio', consultorioController.updateConsultorio);
    }
}

const consultorioRoutes = new ConsultorioRoutes();
    export default consultorioRoutes.router;