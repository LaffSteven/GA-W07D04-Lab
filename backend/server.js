const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Cars = require('./models/cars.js');

app.use(express.json());
app.use(cors());

// create create route
app.post('/cars', (req, res) => {
  Cars.create(req.body, (err, createdCars) => {
    res.json(createdCars);
  })
})

// create index route
app.get('/cars', (req, res) => {
  Cars.find({}, (err, foundCars) => {
    res.json(foundCars)
  })
})

//create delete route
app.delete('/cars/:id', (req, res) => {
  Cars.findByIdAndRemove(req.params.id, (err, deletedCars) => {
    res.json(deletedCars)
  })
})

// create edit route
app.put('/cars/:id', (req, res) => {
  Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCars) => {
    res.json(updatedCars)
  })
})

mongoose.connect('mongodb://localhost:27017/car_collector')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
app.listen(3000, ()=>{
    console.log('listening...');
});
