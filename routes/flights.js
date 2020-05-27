var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const destinationsCtrl = require('../controllers/destinations');



router.get('/',flightsCtrl.index);
router.get('/new',flightsCtrl.new);
router.post('/',flightsCtrl.create);
router.delete('/:id', flightsCtrl.delete);
router.get('/:id', flightsCtrl.show);
router.post('/:id/destinations', destinationsCtrl.create);

module.exports = router;
