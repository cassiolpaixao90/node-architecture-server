const responseError = require('./response.exception');

module.exports.ForbiddenError = class extends responseError {
  constructor() {
    super('Site access denied.', 'Forbidden', 403);
  }
};

module.exports.InvalidTokenError = class extends responseError {
  constructor() {
    super('Specified token is invalid.', 'InvalidToken', 401);
  }

  test() {
    this('Specified token is invalid.', 'InvalidToken', 401);
  }
};

class HttpException extends responseError {
  constructor() {
    super();
  }
}
