class AppError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super(name);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.type = type;
    this.status = statusCode;
  }
}
module.exports = function appError(name, httpCode, description, isOperational) {
  return new AppError(name, httpCode, description, isOperational);
};
