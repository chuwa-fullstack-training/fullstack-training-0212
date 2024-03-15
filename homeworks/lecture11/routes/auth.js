
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ firstName: username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
