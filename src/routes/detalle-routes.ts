import { Router } from "express";
import { detalleController } from "../controllers/DetalleController";

class DetalleRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', detalleController.getDetalle);
        this.router.get('/:idConsultorio/:idPsicologo/:idCita', detalleController.getByIdDetalle);
        this.router.post('/', detalleController.createDetalle);
        this.router.delete('/:idConsultorio/:idPsicologo/:idCita', detalleController.deleteDetalle);
        this.router.put('/:idConsultorio/:idPsicologo/:idCita', detalleController.updateDetalle);
    }
}

const detalleRoutes = new DetalleRoutes();
    export default detalleRoutes.router;