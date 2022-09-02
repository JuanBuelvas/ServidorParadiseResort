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
        let newReserva = new resevaModel(datos);
        return await newReserva.save();
    }

    async actualizar(id, datos){
        return await resevaModel.findByIdAndUpdate(id, datos);
    }

    async eliminar(id){
        return await resevaModel.findByIdAndDelete(id);
    }
}