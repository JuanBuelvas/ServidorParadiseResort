import {resevaModel} from '../models/ReservaModel.js'

export class ReservaService{
    constructor(){}

    async buscarTodas(){
        let reservas = await resevaModel.find();
        return reservas;
    }

    async buscarPorId(id){
        let reserva = await resevaModel.findById(id);
        return reserva;
    }

    async agregar(datos){
        let newReserva = new resevaModel.save(datos);
        return await newReserva.save();
    }

    async actualizar(id, datos){
        return resevaModel.findByIdAndUpdate(id, datos);
    }
}