const router = require('express').Router();

const reservasRouter = require('./routes/reservasRouter');



router.use('/clientes', reservasRouter);
router.use('/hotel', reservasRouter);
router.use('/reserva', reservasRouter);
router.use('/fechas', reservasRouter);


module.exports = router;