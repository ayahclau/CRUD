const mongoose = require('mongoose')

const UnitSchema = new mongoose.Schema({
    unitNumber: Number,
    unitType: String
})

const UnitModel = mongoose.model("units", UnitSchema)
module.exports = UnitModel