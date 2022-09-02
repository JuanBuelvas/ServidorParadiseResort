//import {datos} from '../datos.json'
import {HabitacionService} from '../services/HabitacionService.js';

export class HabitacionController{

    constructor(){};
    
    //Buscar Habitaciones
    async buscarHabitaciones(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        //Intento Resolver la Peticion
       
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos: await habitacionService.buscarTodas()
            })
           
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Buscar Habitacion por ID
    async buscarHabitacionPorId(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();
        
        let ide = request.params.id;

        try{
            response.status(200).json({
                mensaje:"Exito en la consulta " + ide,
                datos: await habitacionService.buscarPorId(ide)
            })

        }catch(error){ //Fallo Resolviendo la Peticion
            response.status(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Agregar Habitacion
    async agregarHabitacion(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        let body = request.body;

        try{
            await habitacionService.agregar(body);
            response.status(200).json({
                mensaje:"Exito Agregando la Habitacion " + body.nombre,
                datos:null
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response.status(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Editar Habitacion
    async editarHabitacion(request, response){
        //Instanciar HabitacionService
        let habitacionService = new HabitacionService();

        let id = request.params.id;
        let datos = request.body;

        try{
            await habitacionService.actualizar(id, datos);
            response.status(200).json({
                mensaje:"Exito editando la habitacion " + id,
                datos:null
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response.status(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Eliminar Habitacion
    // async eliminarHabitacion(request, response){
    //     try{
    //         response.status(200).json({
    //             mensaje:"Exito en la consulta " + id,
    //             datos:["Habi1","200USD","Tv por cable"]
    //         })
    //     }catch(error){ //Fallo Resolviendo la Peticion
    //         response(404).json({
    //             mensaje:"Upp, algo fallo " + error,
    //             datos:null
    //         })
    //     }
    // }
}