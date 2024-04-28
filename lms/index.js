const mongoose = require('mongoose');
const app = require('./app');
const PORT = 3000;
let server;

mongoose.connect('mongodb://localhost:27017/soch_lms_db',{}).then(() => {
  console.log('Connected to MongoDB');
  server= app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
  });
});
