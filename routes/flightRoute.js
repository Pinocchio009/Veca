
const router = require('express').Router();
const controller = require('../controllers/flightController');

router
    .get('/', controller.getFlight)
    .get('/:id', controller.getFlights)
    .post("/", controller.createFlight)
    .put('/:id', controller.updateFlight)
    .delete('/:id', controller.deleteFlight);


module.exports = router;

