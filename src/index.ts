import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import alumnoRoutes from './routes/alumno-routes';
import carreraRoutes from './routes/carrera-routes';
import citaRoutes from './routes/cita-routes';
import consultorioRoutes from './routes/consultorio-routes';
import modalidadRoutes from './routes/modalidad-routes';
import nivelRoutes from './routes/nivel-routes';
import psicologoRoutes from './routes/psicologo-routes';
import detalleRoutes from './routes/detalle-routes';
import consultarCitaRoutes from './routes/consultarCita-routes';

	class Server{
		public app: Application;
            constructor(){
				this.app =  express();
				this.config();
				this.routes();
			}

			config():void{
				this.app.set('port', process.env.PORT || 3000);
                this.app.use(morgan('dev'));
                this.app.use(cors());
                this.app.use(express.json());  //ACEPTA FORMATO JSON
                this.app.use(express.urlencoded({extended:false})); //ACEPTA FORMULARIOS HTML
			}

			routes():void{ //GRUPO DE RUTAS
                this.app.use('/alumno', alumnoRoutes);
                this.app.use('/carrera', carreraRoutes);
                this.app.use('/cita', citaRoutes);
                this.app.use('/consultorio', consultorioRoutes);
                this.app.use('/modalidad', modalidadRoutes);
                this.app.use('/nivel', nivelRoutes);
                this.app.use('/psicologo', psicologoRoutes);
				this.app.use('/detalle', detalleRoutes);
				this.app.use('/consultar', consultarCitaRoutes);
			}
			

			star() :void{
				this.app.listen(this.app.get('port'), ()=>{
					console.log('Serever on port ', this.app.get('port'));
				});
			}
		}

		const server = new Server();
		server.star();