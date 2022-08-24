//Instanciamos EXPRESS
import express from 'express';

//Importar HabitacionController
import {HabitacionController} from '../controllers/HabitacionController.js';

let habitacionController = new HabitacionController;

//Variable para personalizar rutas(ENDPOINTS) del servicio
export let routers = express.Router()

//Escribo mis rutas (cada ruta es un servicio)
//ENDPOINTS PARA LOS SERVICIOS ASOICIADOS A LAS HABITACIONES
routers.get('/viajesComfama/v1/habitaciones',habitacionController.buscarHabitaciones);
routers.get('/viajesComfama/v1/habitacion/:id',habitacionController.buscarHabitacionPorId);
routers.post('/viajesComfama/v1/habitacion',habitacionController.agregarHabitacion);
routers.put('/viajesComfama/v1/habitacion/:id',habitacionController.editarHabitacion);
routers.delete('/viajesComfama/v1/cancelar/id',);

//ENDPOINTS PARA LOS SERVICIOS ASOICIADOS A LAS RESERVAS
routers.get('/viajesComfama/v1/habitaciones',);
routers.get('/viajesComfama/v1/habitacion/id',);
routers.post('/viajesComfama/v1/reserva',);
routers.put('/viajesComfama/v1/reserva/id',);
routers.delete('/viajesComfama/v1/cancelar/id',);

