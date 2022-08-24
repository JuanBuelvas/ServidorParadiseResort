//Importar Mongoose
import mongoose from "mongoose";

//Conectar a la BD
export async function conectar() {
    try{
        await mongoose.connect(process.env.DATABASE);
    }catch(error){
        console.log("No se pudo conectar a la base de datos" + error);
    } 
}



