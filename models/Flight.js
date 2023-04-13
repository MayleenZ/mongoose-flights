const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
    enum: ["American", "Southwest", "United"]
  },
  flightNo: {type: Number,
    min: 10,
    max: 9999
  },
  departs: {type: Date}
});


const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight