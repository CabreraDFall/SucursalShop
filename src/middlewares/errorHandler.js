function errorHandler(err, req, res, next) {
    console.error(err.stack);

    const status = err.status || 500;
    const message = err.message || 'Error interno del servidor';

    res.status(status).json({
        error: true,
        message: message,
        // En desarrollo podrías querer ver el stack, en producción no
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
}

module.exports = errorHandler;
