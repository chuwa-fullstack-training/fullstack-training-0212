require('dotenv').config();
const mongoose = require('mongoose');
//console.log(process.env.MONGODB_URI)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'todo-list'
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

module.exports = mongoose;