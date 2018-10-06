/**
 * @author Cássio Paixão
 */
const chalk = require('chalk');
const LogStrategy = require('./strategy.logger');

class Logger {
  /**
   * @param {*} strategy
   * @augments logLocal
   * @argument logServer
   */
  constructor(strategy = 'logConsole') {
    this.strategy = LogStrategy[strategy];
  }

  /**
   * @param {*} newStrategy
   * @augments logLocal
   * @argument logServer
   * @description in case of new strategy
   */
  changeStrategy(newStrategy) {
    this.strategy = LogStrategy[newStrategy];
  }

  /**
   * @param {*} message
   * @description message error
   */
  error(message) {
    const timestamp = new Date().toISOString();
    const msg = `${chalk.red(`✘ ${message} - ${timestamp}`)} `;
    this.strategy(msg);
  }

  /**
   * @param {*} message
   * @description message success
   */
  success(message) {
    const timestamp = new Date().toISOString();
    const msg = `${chalk.green(`✓ ${message} - ${timestamp}`)} `;
    this.strategy(msg);
  }

  /**
   * @param {*} message
   * @description message info
   */
  info(message) {
    const timestamp = new Date().toISOString();
    const msg = `${chalk.yellow(`${message} - ${timestamp}`)} `;
    this.strategy(msg);
  }
}

/* TODO get env dev development or production */
module.exports = new Logger('logLocal');
