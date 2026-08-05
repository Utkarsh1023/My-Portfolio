export function notFound(req, res) {
  return res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
}

export function errorHandler(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.error(err);

  // If CORS rejected the origin, still return a useful JSON response.
  if (err.message === 'Not allowed by CORS') {
    const origin = req.headers?.origin;
    return res.status(403).json({
      message: `Origin "${origin || 'unknown'}" is not allowed by CORS. ` +
        'Add it to CLIENT_ORIGIN on the server.'
    });
  }

  const status = err.statusCode || err.status || 500;
  return res.status(status).json({ message: err.message || 'Internal Server Error' });
}

