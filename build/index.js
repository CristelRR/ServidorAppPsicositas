"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const alumno_routes_1 = __importDefault(require("./routes/alumno-routes"));
const carrera_routes_1 = __importDefault(require("./routes/carrera-routes"));
const cita_routes_1 = __importDefault(require("./routes/cita-routes"));
const consultorio_routes_1 = __importDefault(require("./routes/consultorio-routes"));
const modalidad_routes_1 = __importDefault(require("./routes/modalidad-routes"));
const nivel_routes_1 = __importDefault(require("./routes/nivel-routes"));
const psicologo_routes_1 = __importDefault(require("./routes/psicologo-routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //ACEPTA FORMATO JSON
        this.app.use(express_1.default.urlencoded({ extended: false })); //ACEPTA FORMULARIOS HTML
    }
    routes() {
        this.app.use('/alumno', alumno_routes_1.default);
        this.app.use('/carrera', carrera_routes_1.default);
        this.app.use('/cita', cita_routes_1.default);
        this.app.use('/consultorio', consultorio_routes_1.default);
        this.app.use('/modalidad', modalidad_routes_1.default);
        this.app.use('/nivel', nivel_routes_1.default);
        this.app.use('/psicologo', psicologo_routes_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Serever on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.star();
