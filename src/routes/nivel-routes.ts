import { Router } from "express";
import { nivelController } from "../controllers/NivelController";

class NivelRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', nivelController.getNivel);
        this.router.get('/:idNivel', nivelController.getByIdNivel);
        this.router.post('/', nivelController.createNivel);
        this.router.delete('/:idNivel', nivelController.deleteNivel);
        this.router.put('/:idNivel', nivelController.updateNivel);
    }
}

const nivelRoutes = new NivelRoutes();
    export default nivelRoutes.router;