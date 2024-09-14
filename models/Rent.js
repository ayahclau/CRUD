const mongoose = require('mongoose')

const RentSchema = new mongoose.Schema({
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    paymentMethod: String,
    date: Date,
    balance: String
})

const RentModel = mongoose.model("rents", RentSchema)
module.exports = RentModel