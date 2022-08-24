export class ReservaController{
    constructor(){};

    //Buscar Reservas
    buscarReservas(request, response){
        //Intento Resolver la Peticion
        try{
            response.status(200).json({
                mensaje:"Exito en la consulta",
                datos:["Habi1","200USD","Tv por cable"]
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
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Agregar Reserva
    agregarReserva(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Editar Reserva
    editarReserva(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }

    //Eliminar Reserva
    eliminarReserva(request, response){
        try{
            response.status(200).json({})
        }catch(error){ //Fallo Resolviendo la Peticion
            response(404).json({})
        }
    }
}