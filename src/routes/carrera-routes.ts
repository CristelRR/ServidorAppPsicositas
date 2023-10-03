import { Router } from "express";
import { carreraController } from "../controllers/CarreraConttroller";

class CarreraRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', carreraController.getCarrera);
        this.router.get('/:idCarrera', carreraController.getByIdCarrera);
        this.router.post('/', carreraController.createCarrera);
        this.router.delete('/:idCarrera', carreraController.deleteCarrera);
        this.router.put('/:idCarrera', carreraController.updateCarrera);
    }
}

const carreraRoutes = new CarreraRoutes();
    export default carreraRoutes.router;