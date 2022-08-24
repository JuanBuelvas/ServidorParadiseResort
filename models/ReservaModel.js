//Importar Mongoose
import mongoose from "mongoose";

//Esquema de datos de mongoose
//regla de que DATOS voy a manipular
const Schema = mongoose.Schema;

const Reserva = new Schema({
    idHabitacion:{
        type:String,
        required:true
    },
    fechaEntrada:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true
    },
    numeroAdultos:{
        type:Number,
        required:true
    },
    numeroNinos:{
        type:Number,
        required:false
    },
    valorReserva:{
        type:Number,
        required:true
    },
})

const resevaModel=mongoose.model('reserva', Reserva);

