const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


router.get('/flights/:id/tickets/new/', ticketsCtrl.new);
router.post('/tickets/:is', ticketsCtrl.createTicket);
router.delete('/tickets/:flightid/:ticketid', ticketsCtrl.deleteTicket);

module.exports = router;