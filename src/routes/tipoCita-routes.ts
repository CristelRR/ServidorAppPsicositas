import { Router } from "express";
import { tipoCitaController } from "../controllers/TipoCitaController";

class TipoCitaRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){ 
        this.router.get('/', tipoCitaController.getTipoCita);
        this.router.get('/:idTipoCita', tipoCitaController.getByIdTipoCita);
        this.router.post('/', tipoCitaController.createTipoCita);
        this.router.delete('/:idTipoCita', tipoCitaController.deleteTipoCita);
        this.router.put('/:idTipoCita', tipoCitaController.updateTipoCita);
    }
}

const tipoCitaRoutes = new TipoCitaRoutes();
export default tipoCitaRoutes.router;