//Instanciamos EXPRESS
//const express = require('express') //Vieja Forma de Importar
// import express from 'express' //Nueva Forma de Importar
// const app = express() => Se traslada a Servidor.js

//Atendiendo Peticiones
// app.get('/', function (req, res) {
//   res.send('Hello World')
// }) => Se traslada a Servidor.js

//Despertando el Servidor
// app.listen(3000, function(){
//     console.log("Corriendo servidor")
// }) => Se traslada a Servidor.js
//Instanciar Servidor
import {Servidor} from './servidor/Servidor.js'

import 'dotenv/config'

//Para utilizar una clase debo instanciar
//Para usar una clase debo crear un objeto (declarar variable)
//Para usar una clase le debo sacar copia
let servidorComfama = new Servidor();
servidorComfama.encenderServidor();

//console.log(process.env.PORT) // remove this after you've confirmed it working
