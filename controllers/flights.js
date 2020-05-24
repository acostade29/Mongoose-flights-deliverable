const Flight = require('../models/flight');


module.exports = {
    index,
    new: newFlightView
} 

function index(req, res) {
    res.render('flights/index');
}

function newFlightView(req, res) {
    res.render('fligths/views');
}