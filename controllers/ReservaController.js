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
            response.json(datos);
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
            response.json(datos);
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
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;
        let datos = request.body;

        try{
            reservaService.actualizar(id, datos);
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

    //Eliminar Reserva
    eliminarReserva(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;
        
        try{
            reservaService.eliminar(id);
            response.status(200).json({
                mensaje:"Exito eliminando la reserva",
                datos:null
            })
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({
                mensaje:"Upp, algo fallo " + error,
                datos:null
            })
        }
    }
}