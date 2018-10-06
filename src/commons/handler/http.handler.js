/**
 * @author Cássio Paixão
 */
class HttpHandler {
  /**
   * @param {*} res
   * @param {*} message
   * @param {*} data
   */
  sendSuccess(res, message, data) {
    res.status(200).json({ type: 'success', message, data });
  }

  /**
   * @param {*} res
   * @param {*} status
   * @param {*} message
   * @param {*} error
   */
  sendError(res, status, message, error) {
    res.status(status || error.status).json({
      type: 'error',
      message: message || error.message,
      error,
    });
  }
}
