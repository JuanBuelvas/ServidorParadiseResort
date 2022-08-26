import {habitacionModel} from '../models/HabitacionModel.js';

export class HabitacionService{
    constructor(){};

    async buscarTodas(){
        let habitaciones = await habitacionModel.find();
        return habitaciones;
    }

    async buscarPorId(id){
        let habitacion = await habitacionModel.findById(id);
        return habitacion;
    }

    async agregar(datos){
        let newHabitacion = new habitacionModel(datos);
        return await newHabitacion.save();

    }

    async actualizar(id, datos){
        return habitacionModel.findByIdAndUpdate(id, datos);
    }
}