import { Router  } from "express";
import { loginController } from "../controllers/LoginController";

class LoginRoutes{
    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', loginController.getUsers);
        this.router.get('/:id_usuario', loginController.getByIdUsr);
        this.router.get('/:id_usuario/:password', loginController.getUsr);
        this.router.post('/:id_usuario', loginController.getUser);
        this.router.post('/:id_usuario/:password', loginController.getUsr);
        this.router.post('/', loginController.insertUsr);
    }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;