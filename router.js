
const router = require('express').Router();

//Importamos Routes definidas en views
const ReservaRouter = require('./views/reservasRouter');


//Rutas
router.use('/cliente', ReservaRouter);
// router.use('/hotel', ReservaRouter);
// router.use('/reserva', ReservaRouter);


module.exports = router;