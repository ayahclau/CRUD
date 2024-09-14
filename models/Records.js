const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
    date: Date,
    description: String,
    cost: String,
    amtPaid: String
})

const RecordModel = mongoose.model("records", RecordSchema)
module.exports = RecordModel