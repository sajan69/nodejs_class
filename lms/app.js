require('dotenv').config();
const express = require('express');
const httpStatus = require('http-status');

const app = express();


const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
app.use((err,req,res,next)=>{
  console.log(err.message);
  res.status(err.status || httpStatus.BAD_REQUEST).json({
    message: err.message
  })

})

module.exports = app;