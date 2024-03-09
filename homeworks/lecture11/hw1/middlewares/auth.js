const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  if (!token) {
    next();
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.employee = decoded.employee;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
