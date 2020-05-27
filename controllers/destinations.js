const Flight = require('../models/flight');


module.exports= {
    create
}


function create(req, res) {
    console.log(req.body, req.params.id)
    //crete a destination and append to a flight 
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            console.log(flight);
            res.redirect(`/flights/${flight._id}`);
        })
    })

}