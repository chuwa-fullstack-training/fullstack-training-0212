class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// class PayloadError extends Error {
//   constructor...
// }

module.exports = {
  CustomAPIError,
  // PayloadError,
};
