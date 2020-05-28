const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TicketSchema = new Schema({
    seat: {
        type: String,
        required:true,
        match: /[A-F][1-9]\d?/
        
    },
    price : {
        type: Number,
        required:true,
        min: 0,
        max: 9999
    },

    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'

    }
})



module.exports = mongoose.model('ticket',ticketSchema);