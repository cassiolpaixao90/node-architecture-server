class ResponseError extends Error {
  constructor(message, type, statusCode) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.type = type;
    this.status = statusCode;
  }
}
module.exports = function responseError(message, type, statusCode) {
  return new ResponseError(message, type, statusCode);
};
