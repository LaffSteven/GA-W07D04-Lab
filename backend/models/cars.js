const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: String,
  model: String,
  color: String,
  year: Number,
  weekendCar: Boolean
})

const Cars = mongoose.model('Car', carSchema);

module.exports = Cars;
