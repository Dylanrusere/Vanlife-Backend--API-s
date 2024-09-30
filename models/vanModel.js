const mongoose = require('mongoose');


const vanSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        availability: Boolean,
        capacity: Number,
        fuelType: String,
        fuelCapacity: Number,
        pricePerDay: Number,
        image: String
    },

    {
        Timestamps: true,
    },


);

module.exports = mongoose.model('Van', vanSchema);