const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

//--пользователи--
//регистрации пользователя
const validateUserRegistration = celebrate({
  body: Joi.object().keys({})
})
//авторизация пользователя по логину и паролю
const validateUserLogin = celebrate({ body: Joi.object().keys({}) })
//обновления данных пользователя
const validateUserUpdate = celebrate({ body: Joi.object().keys({}) })
//получение пользователя по id
const validateUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateUserUpdate,
  validateUserById
}