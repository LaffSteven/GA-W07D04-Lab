const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');





mongoose.connect('mongodb://localhost:27017/car_collector')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
app.listen(3000, ()=>{
    console.log('listening...');
});
