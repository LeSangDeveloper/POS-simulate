const logger = require('../helpers/logger').error;

module.exports = (err, req, res, next) => {
  // TODO: Add Notification
  logger.error(err);

  console.log(err);

  if (res.headersSent) {
    return next();
  }

  return res.status(500).json({
    message: 'Something Wrong.',
  });
}