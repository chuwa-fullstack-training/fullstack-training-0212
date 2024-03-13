const CustomAPIError = require('../index-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }// else if (err instanceof PayloadError) {  //customize, 用户发送请求到后端时缺少一些东西，或格式不对
  //   return ...
  // }
  if (err.statusCode === 401) {
    // Customize the error message for 401 Unauthorized
    return res.status(401).json({ error: 'Custom Unauthorized Message' });
  }
  return res  //无法预料的general case
    .status(err.statusCode || 500)
    .json({ message: err.message || 'Something went wrong, please try again' });
};

module.exports = errorHandlerMiddleware;
