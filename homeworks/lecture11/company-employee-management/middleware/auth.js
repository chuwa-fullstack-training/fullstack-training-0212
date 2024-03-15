const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token =
        req.header('x-auth-token') ||
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];

    if (!token) return res.status(401).json({ message: 'A token is required for authentication' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = auth;
