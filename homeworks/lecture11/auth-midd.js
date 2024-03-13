const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // Get token from header
  // verify
  const token =
  // token随着req发过来的方式：header, params，body
    req.header('x-auth-token') ||  
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];  

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }  //Bearer：携带者+token信息

  // Check if token exists
  if (!token) {   // 401 unauthorized
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    // Verify token，判断token对不对
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);  //如果不等会报错，直接进catch（）

    // Add user from payload
    req.user = decoded.user;  //decoded拿到的payload放进原来没有的req.user（req里原来没有user这个attribute）
    //放的位置能被别的middleware获取

    next();  //进入下一个middleware func，进router/posts里的getPostByUser
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
