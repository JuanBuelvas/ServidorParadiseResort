//Importar Mongoose
import mongoose from "mongoose";

//Esquema de datos de mongoose
//regla de que DATOS voy a manipular
const Schema = mongoose.Schema;

const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    valorNoche:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagenes:{
        type:String,
        required:false
    },
    numeroPersonas:{
        type:Number,
        required:true
    }
})
//Exportar Habitacion
export const habitacionModel=mongoose.model('habitacion', Habitacion);

