class CustomAPIError extends Error {  //继承于built in error
  constructor(message, statusCode) { 
    super(message);
    this.statusCode = statusCode || 599;
  }
  warning() {
    return `Warning: ${this.message}`
  }
}

module.exports = CustomAPIError;
