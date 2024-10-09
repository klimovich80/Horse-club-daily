const InternalServerError = require('../errors/InternalServerError');

module.exports = (err, req, res, next) => {
  const code = err.code || InternalServerError.code; //internal server error 500
  const message = code === InternalServerError.code ? 'Внутренняя ошибка сервера' : err.message;

  res.status(code).send({ message });

  next();
}