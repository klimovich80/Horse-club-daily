const { Error } = require('mongoose');

const BadRequestError = require('../errors/BadRequestError');// ошибки валидации
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');// ошибки поиска документа
const DuplicateError = require('../errors/DuplicateError');// ошибки дублирования
const InternalServerError = require('../errors/InternalServerError');// ошибки сервера
const NotOwnerError = require('../errors/NotOwnerError');// ошибки авторства
const UnauthorizedError = require('../errors/UnauthorizedError');// ошибки авторизации

// константы ошибок, используемые в проекте
const OK_STATUS = 200;// OK
const CREATED_STATUS = 201;// Created
const BAD_REQUEST_STATUS = 400;// Bad Request
const UNAUTHORIZED_STATUS = 401;// Unauthorized
const FORBIDDEN_STATUS = 403;// Forbidden
const NOT_FOUND_STATUS = 404;// Not Found
const INTERNAL_SERVER_ERROR_STATUS = 500;// Internal Server Error
const NOT_IMPLEMENTED_STATUS = 501;// Not Implemented
const MONGO_DUPLICATE_KEY_ERROR = 11000;// Mongo duplicate key error

const errorHandler = (err, next) => {
  console.log(err.code);
  console.log(err);
  if (err.code == MONGO_DUPLICATE_KEY_ERROR) {
    next(new DuplicateError('эта запись уже есть в базе'));
  } else if (err.code === BAD_REQUEST_STATUS) {
    next(new BadRequestError(err.message));
  } else if (err instanceof Error.DocumentNotFoundError) {
    next(new DocumentNotFoundError('запись не найдена'));
  } else if (err.code === UNAUTHORIZED_STATUS) {
    next(new UnauthorizedError(err.message));
  } else if (err.code === FORBIDDEN_STATUS) {
    next(new NotOwnerError('вы не являетесь владельцем этой записи'));
  }
  next(new InternalServerError(`Что-то пошло не так с сервером: ${err.message}`));
}


module.exports = {
  errorHandler,
  OK_STATUS,
  CREATED_STATUS
};