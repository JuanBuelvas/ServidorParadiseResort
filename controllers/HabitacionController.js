//import {datos} from '../datos.json'
import {HabitacionService} from '../services/HabitacionService.js';

export class HabitacionController{

    constructor(){};
    
    //Buscar Habitaciones
    buscarHabitaciones(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        //Intento Resolver la Peticion
        //let datos = new datos;
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:habitacionService.buscarTodas()
            })
            response.json(datos);
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Buscar Habitacion por ID
    buscarHabitacionPorId(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();
        
        let id = request.params.id

        try{
            response.status(200).json({
                mensaje:"Exito en la consulta " + id,
                datos:habitacionService.buscarPorId(id)
            })
            response.json(datos);
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Agregar Habitacion
    agregarHabitacion(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        let body = request.body;

        try{
            habitacionService.agregar(body);
            response.status(200).json({
                mensaje:"Exito Agregando la Habitacion " + body.nombre,
                datos:null
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Editar Habitacion
    editarHabitacion(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        let id = request.params.id;
        let datos = request.body;

        try{
            habitacionService.actualizar(id, datos);
            response.status(200).json({
                mensaje:"Exito editando la habitacion " + id,
                datos:null
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Eliminar Habitacion
    eliminarHabitacion(request, response){
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta " + id,
                datos:["Habi1","200USD","Tv por cable"]
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }
}