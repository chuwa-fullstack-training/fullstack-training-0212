const express = require('express');
const todoRouter = require('./routers/todoRouter');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config({ path: '.env' })

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views');
console.log(process.env.SECRET)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.SECRET, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB()


app.use("/", todoRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000\n');
});
