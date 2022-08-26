import {ReservaService} from '../services/ReservaService.js'

export class ReservaController{
    constructor(){};

    //Buscar Reservas
    buscarReservas(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        //Intento Resolver la Peticion
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:reservaService.buscarTodas()
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Buscar Reserva por ID
    buscarReservaPorId(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;

        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:reservaService.buscarPorId(id)
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Agregar Reserva
    agregarReserva(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let body = request.body;

        try{
            reservaService.agregar(body);
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

    //Editar Reserva
    editarReserva(request, response){
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:reservaService.buscarTodas()
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }

    //Eliminar Reserva
    eliminarReserva(request, response){
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:reservaService.buscarTodas()
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }
}