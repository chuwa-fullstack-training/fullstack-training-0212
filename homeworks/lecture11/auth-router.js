const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../schema').Employee;
const CustomAPIError = require('../index-error');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {  
  try {
    const { firstName, lastName } = req.body;

    let user = await User.findOne({ firstName });  //找user存不存在

    if (!user) {  //如果不存在 throw error
      throw new CustomAPIError('Invalid Credentials', 400);   //CustomAPIError: class, extends Error(继承)
    }

    if (user.password !== lastName) {  //如果pw有错
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // 生成token
    const payload = {
      user: {
        id: user._id
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {   
      expiresIn: '30d'
    });
    
    res.json({ token });  //token 返回回来
  } catch (err) {
    next(err);   
  }
});

module.exports = router;
