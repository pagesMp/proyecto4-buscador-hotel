const router = require('express').Router();

const reservasRouter = require('./routes/reservasRouter');



router.use('/', reservasRouter);

module.exports = router;