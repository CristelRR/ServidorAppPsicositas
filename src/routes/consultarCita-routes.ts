import { Router } from "express";
import { consultarCitaController } from "../controllers/ConsultarCitaController";

class ConsultarCitaRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', consultarCitaController.getByInfoCita);
    }
}

const consultarCitaRoutes = new ConsultarCitaRoutes();
    export default consultarCitaRoutes.router;