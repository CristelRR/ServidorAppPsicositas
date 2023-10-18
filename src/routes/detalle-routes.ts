import { Router } from "express";
import { detalleController } from "../controllers/DetalleController";

class DetalleRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', detalleController.getDetalle);
        this.router.get('/:PRIMARY', detalleController.getByIdDetalle);
        this.router.post('/', detalleController.createDetalle);
        this.router.delete('/:PRIMARY', detalleController.deleteDetalle);
        this.router.put('/:PRIMARY', detalleController.updateDetalle);
    }
}

const detalleRoutes = new DetalleRoutes();
    export default detalleRoutes.router;