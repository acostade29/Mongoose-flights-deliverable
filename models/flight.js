const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: [ "American", "SouthWest","United"]
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date
      
    }
}, {
    timestamps: true
});





module.exports = mongoose.model('Flight',flightSchema);