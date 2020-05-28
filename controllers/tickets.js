var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    new: newTicketPage,
    createTicket,
    deleteTicket,
    
};

function newTicketPage(req, res) {
    console.log(req.params.id)
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {title: 'Add Ticket', flight});
    });
} ;


function createTicket(req, res) {
    console.log(req.body)
    console.log(req.params.id)
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, tickets) {  
      res.redirect(`/flights/${req.params.id}`);
      })
    };
  
function deleteTicket(req, res) {
    console.log(req.params)
    Ticket.findByIdAndDelete(req.params.ticketid, function(err, ticket) {
        res.redirect(`/flights/${req.params.flightid}`);
    })
}