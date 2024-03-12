const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' })
const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://Admin:TjEL4xWiPsW0a0h0@mola.dbe0pil.mongodb.net/CHUWA?retryWrites=true&w=majority", {
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
  
module.exports = connectDB