const express = require('express');
const mongoose = require('mongoose');
//require('dotenv').config({ path: 'config.env' });
MONGODB_URI="mongodb+srv://weizhouwen5:j8XCZeggCnv3TtnX@cluster0.v5vkfht.mongodb.net/"
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/login', require('./routes/auth'));
app.use('/api/signup', require('./routes/signup'));
app.use('/api/companies', require('./routes/companies'));
app.use('/api/employees', require('./routes/employees'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
