const router = require('express').Router();

const reservasRouter = require('./routes/reservasRouter');



router.use('/api', reservasRouter);

module.exports = router;