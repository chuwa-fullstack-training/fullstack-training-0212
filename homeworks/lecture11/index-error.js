class CustomAPIError extends Error {  //继承于built in error
  constructor(message, statusCode) {  //stack？报错后每一步在那里出错去customize
    super(message);
    this.statusCode = statusCode || 599;
  }
  warning() {
    return `Warning: ${this.message}`
  }
}

module.exports = CustomAPIError;

//error trace back,debugger, 可读性，可维护性更好，都靠catch接受err，最好next（）传进来