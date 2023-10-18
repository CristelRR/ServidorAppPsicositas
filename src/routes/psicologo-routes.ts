import { Router } from "express";
import { psicologoController } from "../controllers/PsicologoController";

class PsicologoRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){ 
        this.router.get('/', psicologoController.getPsicologo);
        this.router.get('/:idPsicologo', psicologoController.getByIdPsicologo);
        this.router.post('/', psicologoController.createPsicologo);
        this.router.delete('/:idPsicologo', psicologoController.deletePsicologo);
        this.router.put('/:idPsicologo', psicologoController.updatePsicologo);
    }
}

const psicologoRoutes = new PsicologoRoutes();
export default psicologoRoutes.router;