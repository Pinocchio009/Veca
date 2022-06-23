
const router = require('express').Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlight)

router.post("/", controller.createFlight);


module.exports = router;

