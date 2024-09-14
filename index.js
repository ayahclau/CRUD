const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const RecordModel = require('./models/Records')
const RentModel = require('./models/Rent')
const UnitModel = require('./models/Unit')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/users', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/unit', (req, res) => {
    UnitModel.find({})
    .then(unit => res.json(unit))
    .catch(err => res.json(err))
})

app.get('/records', (req, res) => {
    RecordModel.find({})
    .then(records => res.json(records))
    .catch(err => res.json(err))
})

app.get('/rent', (req, res) => {
    RentModel.find({})
    .then(rent => res.json(rent))
    .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getRecord/:id', (req, res) => {
    const id = req.params.id;
    RecordModel.findById({_id:id})
    .then(records => res.json(records))
    .catch(err => res.json(err))
})

// app.get('/getRent/:id', (req, res) => {
//     const id = req.params.id;
//     RentModel.findById(id)
//     .then(rent => res.json(rent))
//     .catch(err => res.json(err))
// })

app.get('/getRent/:id', (req, res) => {
    const id = req.params.id;
    RentModel.findById(id)
        .then(rent => {
            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }
            console.log('Fetched Rent:', rent);
            res.json(rent);
        })
        .catch(err => {
            console.error('Error fetching rent:', err);
            res.status(500).json({ error: err.message });
        });
});


app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        rentStart: req.body.rentStart,
        rentEnd: req.body.rentEnd,
        securityDeposit: req.body.securityDeposit})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateRecord/:id', (req, res) => {
    const id = req.params.id;
    RecordModel.findByIdAndUpdate({_id:id}, {
        date: req.body.date,
        description: req.body.description,
        cost: req.body.cost,
        amtPaid: req.body.amtPaid})
    .then(records => res.json(records))
    .catch(err => res.json(err))
})

app.put('/updateRent/:id', (req, res) => {
    const id = req.params.id;
    RentModel.findByIdAndUpdate(id, {
        tenant: req.body.tenant,
        paymentMethod: req.body.paymentMethod,
        date: req.body.date,
        balance: req.body.balance}, {
            new:true
        })
    .then(rent => res.json(rent))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.delete('/deleteUnit/:id', (req, res) => {
    const id = req.params.id;
    UnitModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.delete('/deleteRecord/:id', (req, res) => {
    const id = req.params.id;
    RecordModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.delete('/deleteRent/:id', (req, res) => {
    const id = req.params.id;
    RentModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUnit", (req, res) => {
    UnitModel.create(req.body)
    .then(unit => res.json(unit))
    .catch(err => res.json(err))
})

app.post("/createRecord", (req, res) => {
    RecordModel.create(req.body)
    .then(records => res.json(records))
    .catch(err => res.json(err))
})

app.post("/createRent", (req, res) => {
    RentModel.create(req.body)
    .then(rent => res.json(rent))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})