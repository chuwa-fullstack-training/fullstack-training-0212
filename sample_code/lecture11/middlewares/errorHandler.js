const CustomAPIError = require("../errors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  // else if(err instanceof PayloadError) {
  //   return ....
  // }  define different status code handler to handle different error transferred in
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
