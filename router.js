const router = require('express').Router();

//Importamos Routes definidas en views
const clientesRouter = require('./models/clientes');
const reservaRouter = require('./models/reserva');
const hotelRouter = require('./models/hotel');

//Rutas
router.use('/clientes', clientesRouter);
router.use('/reserva', reservaRouter);
router.use('/hotel', hotelRouter);

module.exports = router;