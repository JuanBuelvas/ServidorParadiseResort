//Instanciar EXPRESS
import express from 'express'
//Instanciar Routers
import {routers} from '../routers/routers.js'
//Instanciar metodo conectar
import {conectar} from '../database/conexion.js'

export class Servidor{

    constructor(){
        this.app = express()
        this.habilitarBody()
        this.atenderPeticiones() //Atender peticiones
    }

    atenderPeticiones(){
        this.app.use('/',routers)
    }

    habilitarBody(){
        this.app.use(express.json())
    }

    encenderServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Corriendo servidor por el puerto " + process.env.PORT)
        })
    }

    conectarBD(){
        conectar();
    }
}