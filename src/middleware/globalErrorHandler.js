const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    error: err.details
  });
};

module.exports = globalErrorHandler;
