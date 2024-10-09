const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { errorHandler } = require('../controllers/errors');
const { jwtSecretCheck } = require('../config');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;// authorization: Bearer <token>
  const authError = new UnauthorizedError('Необходима авторизация');

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return errorHandler(authError, next); // если не авторизован, то выводим ошибку
  }

  const token = authorization.replace('Bearer ', ''); // удаляем Bearerиз строки

  let payload; // переменная для хранения токена

  try {
    payload = jwt.verify(token, jwtSecretCheck());// проверяем токен
  } catch (err) {
    return errorHandler(authError, next);
  }

  req.user = payload;// если токен валидный, то записываем его в req.user

  next();
  return 1;

}