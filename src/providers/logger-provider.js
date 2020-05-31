const bunyan = require('bunyan');
const package_info = require('../../package.json');

let instance = null;

class LoggerProvider {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  _setupLogger() {
    const logger = bunyan.createLogger({
      name: package_info.name,
      streams: [
        {
          stream: process.stdout,
          level: bunyan.INFO
        }
      ],
      Application: package_info.name
    });

    this.logger = logger;
  }

  getLogger() {
    if (!this.logger) {
      // eslint-disable-next-line no-underscore-dangle
      this._setupLogger();
    }
    return this.logger;
  }
}

module.exports = LoggerProvider;
