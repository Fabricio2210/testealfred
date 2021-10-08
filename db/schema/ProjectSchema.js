const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: Array
    }
})

module.exports = mongoose.model("TaskSchema", TaskSchema);