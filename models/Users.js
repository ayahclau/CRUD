const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    nationality: String,
    email: String,
    contactNumber: String,
    currentAddress: String,
    emergencyContact: String,
    // rentStart: Date,
    // rentEnd: Date,
    // securityDeposit: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel