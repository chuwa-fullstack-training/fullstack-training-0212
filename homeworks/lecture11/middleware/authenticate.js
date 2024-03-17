const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

const SECRET_KEY = 'yanzi';

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Not authenticated' });
  }

  try {
    const data = jwt.verify(token, SECRET_KEY);
    const employee = await Employee.findOne({ _id: data.userId });
    if (!employee) {
      throw new Error();
    }

    req.user = employee;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
};

module.exports = authenticate;
