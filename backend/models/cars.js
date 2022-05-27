const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  make: String,
  model: String,
  color: String,
  year: Number,
  weekendCar: Boolean,
  image: String
})

const Cars = mongoose.model('Car', carSchema);

module.exports = Cars;
