const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json()); //use .json(), not .urlencoded





mongoose.connect('mongodb://localhost:27017/sunnyshelter')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
app.listen(3000, ()=>{
    console.log('listening...');
});
