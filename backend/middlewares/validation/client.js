const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../validation/validate')
//функции валидации

//--клиенты--
//получение клиентов по id
const validateClientById = celebrate({
  params: Joi.object().keys({
    clientId: Joi.string().hex().length(24),
  }),
});
//добавление клиента
const validateClientAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных клиента
const validateClientUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateClientById,
  validateClientAdd,
  validateClientUpdate
}