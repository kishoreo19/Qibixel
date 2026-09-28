const config = require('../config');

/**
 * 404 Not Found Middleware
 */
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API Route Not Found: [${req.method}] ${req.originalUrl}`
  });
};

/**
 * Centralized Error Handling Middleware
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || err.status || 500;
  
  // Clean, consistent JSON error payload
  const responsePayload = {
    success: false,
    message: err.message || 'Something went wrong. Please try again.'
  };

  // Add validation details if present
  if (err.details) {
    responsePayload.errors = err.details;
  }

  // Include stack trace only in non-production environments for developer debugging
  if (config.nodeEnv === 'development' && statusCode === 500) {
    responsePayload.debugStack = err.stack;
  }

  // Log 500 errors safely on the server
  if (statusCode === 500) {
    console.error(`[SERVER ERROR] ${req.method} ${req.originalUrl}:`, err.message, err.stack);
  }

  res.status(statusCode).json(responsePayload);
};

module.exports = {
  notFoundHandler,
  errorHandler
};
