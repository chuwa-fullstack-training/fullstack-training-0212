const mongoose = require('mongoose');
require('dotenv').config();
//console.log(process.env.MONGODB_URI)
mongoose
  .connect('mongodb+srv://xze1932:root@cluster0.dbqtgxt.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

module.exports = mongoose;