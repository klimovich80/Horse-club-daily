const { Error } = require('mongoose');

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
  console.log(err);
}


module.exports = {
  errorHandler,
  OK_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_STATUS,
  UNAUTHORIZED_STATUS,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  INTERNAL_SERVER_ERROR_STATUS,
  NOT_IMPLEMENTED_STATUS,
  MONGO_DUPLICATE_KEY_ERROR
};