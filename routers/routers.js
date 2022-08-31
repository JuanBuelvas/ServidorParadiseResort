//Instanciamos EXPRESS
import express from 'express';

//Importar HabitacionController
import {HabitacionController} from '../controllers/HabitacionController.js';

//Importar ReservaController
import {ReservaController} from '../controllers/ReservaController.js';

let habitacionController = new HabitacionController;

let reservaController = new ReservaController;

//Variable para personalizar rutas(ENDPOINTS) del servicio
export let routers = express.Router()

//Escribo mis rutas (cada ruta es un servicio)
//ENDPOINTS PARA LOS SERVICIOS ASOICIADOS A LAS HABITACIONES
routers.get('/viajesComfama/v1/habitaciones',habitacionController.buscarHabitaciones);
routers.get('/viajesComfama/v1/habitacion/:id',habitacionController.buscarHabitacionPorId);
routers.post('/viajesComfama/v1/habitacion',habitacionController.agregarHabitacion);
routers.put('/viajesComfama/v1/habitacion/:id',habitacionController.editarHabitacion);


//ENDPOINTS PARA LOS SERVICIOS ASOICIADOS A LAS RESERVAS
/*routers.get('/viajesComfama/v1/reservas',reservaController.buscarReservas);
routers.get('/viajesComfama/v1/reserva/:id',reservaController.buscarReservaPorId);
routers.post('/viajesComfama/v1/reserva',reservaController.agregarReserva);
routers.put('/viajesComfama/v1/reserva/:id',reservaController.editarReserva);
routers.delete('/viajesComfama/v1/reserva/:id',reservaController.eliminarReserva);*/

