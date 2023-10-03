import { Router } from "express";
import { modalidadController } from "../controllers/ModalidadController";

class ModalidadRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', modalidadController.getModalidad);
        this.router.get('/:idModalidad', modalidadController.getByIdCarrera);
        this.router.post('/', modalidadController.createModalidad);
        this.router.delete('/:idModalidad', modalidadController.deleteModalidad);
        this.router.put('/:idModalidad', modalidadController.updateModalidad);
    }
}

const modalidadRoutes = new ModalidadRoutes();
    export default modalidadRoutes.router;