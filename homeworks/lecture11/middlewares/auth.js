const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  if (!token) {
   
    console.log("No token found, user identified as anonymous")
    return next()
    
  }
  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.SECRET);
    
    // Add user from payload
    req.companyId = decoded.user.companyId;
    console.log(decoded)
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
