const mongoose = require("mongoose");

const Requestchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Requestchema", Requestchema);