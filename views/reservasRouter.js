
const express = require('express');
const router = express.Router(); 

//CRUD

 const reservaController = require('../controller/reservaController.js');

 router.get('/', reservaController.findAll);
 router.get('/reserva/:id', reservaController.findById);
 router.get('/cliente/:nombre', reservaController.findByNombre);
 router.get('/cliente/:clienteDni', reservaController.findByClienteDni);
 router.get('/hotel/:hotelId', reservaController.findByHotelId);
 router.get('/reserva/:fechaEntrada', reservaController.findByFechaEntrada);
 router.get('/reserva/:fechaSalida', reservaController.findByFechaSalida);


 //definir CRUD rutas

module.exports = router;