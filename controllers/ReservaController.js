import {ReservaService} from '../services/ReservaService.js'

export class ReservaController{

    constructor(){};

    //Buscar Reservas
    async buscarReservas(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        //Intento Resolver la Peticion
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos: await reservaService.buscarTodas()
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
    async buscarReservaPorId(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;

        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos: await reservaService.buscarPorId(id)
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
    async agregarReserva(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let body = request.body;

        try{
            await reservaService.agregar(body);
            response.status(200).json({
                mensaje:"Exito Agregando la Reserva ",
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
    async editarReserva(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;
        let datos = request.body;

        try{
            await reservaService.actualizar(id, datos);
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
    async eliminarReserva(request, response){
        //Instanciar ReservaService
        let reservaService = new ReservaService();

        let id = request.params.id;
        
        try{
            await reservaService.eliminar(id);
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