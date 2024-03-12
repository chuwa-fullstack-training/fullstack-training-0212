const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.headers['x-auth-token'] ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  // console.log(req.headers);
  // if (!token) {
  //   return res.status(401).json({ message: 'No token, authorization denied' });
  // }
  try {
    if(token) {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Add user from payload
      req.user = decoded.user;
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
