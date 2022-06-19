
const router = require('express').Router();

//Importamos Routes definidas en views
const ReservaRouter = require('./routes/reservasRouter');


//Rutas
router.use('/cliente', ReservaRouter);
router.use('/hotel', ReservaRouter);
router.use('/reserva', ReservaRouter);
router.use('/fechas', ReservaRouter);

module.exports = router;