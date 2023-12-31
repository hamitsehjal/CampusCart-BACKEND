// src/logger.js
const pino = require('pino');

// Use 'info' as our standard log level if not specified
const options = {
  "level": process.env.LOG_LEVEL || 'info',
}

// If we are doing 'debug', make logs easier to read
if (options.level === 'debug') {
  options.transport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    }
  }
}

const logger = pino(options);

module.exports = logger;
