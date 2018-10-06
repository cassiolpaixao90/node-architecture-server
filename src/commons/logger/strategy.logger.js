/**
 * @author Cássio Paixão
 */
class LogStrategy {
  /**
   *
   * @param {*} timestamp
   * @param {*} message
   * @description write log in file local
   */
  static logLocal(message) {
    console.log(`${message}`);
  }

  /**
   * @param {*} timestamp
   * @param {*} message
   * @description write logger server per example kibana
   */
  static logServer(message) {
    console.log(`${message}`);
  }

  /**
   * @param {*} timestamp
   * @param {*} message
   * @description print logger in console
   */
  static logConsole(message) {
    console.log(message);
  }
}

module.exports = LogStrategy;
