const express = require('express');
const httpStatus = require('http-status');
const app = express();


const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);
app.use((err,req,res,next)=>{
  console.log(err);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong."
  })

})

module.exports = app;