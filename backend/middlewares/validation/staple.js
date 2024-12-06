const { celebrate, Joi } = require('celebrate');
const {
  httpRegExp,
  emailRegExp,
  phoneNumberRegExp
} = require('../../validation/validate')
//функции валидации

//--конюшни--
//получение конюшни по id
const validateStapleById = celebrate({
  params: Joi.object().keys({
    stapleId: Joi.string().hex().length(24),
  }),
});
//добавление конюшни
const validateStapleAdd = celebrate({
  body: Joi.object().keys({
    openedOn: Joi.date(),
    name: Joi.string().min(2).max(200).required(),
    address: Joi.string().min(2).max(200).required(),
    image: Joi.string().min(2).max(200).pattern(httpRegExp),
    website: Joi.string().min(2).max(200).pattern(httpRegExp),
    social: Joi.string().min(2).max(200).pattern(httpRegExp),
    phone: Joi.string().length(10).pattern(phoneNumberRegExp),
    comments: Joi.string().min(2).max(200),
    closed: Joi.boolean(),
    email: Joi.string().pattern(emailRegExp),
    days: Joi.string().length(10)
  })
});
//обновление данных конюшни
const validateStapleUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateStapleById,
  validateStapleAdd,
  validateStapleUpdate,
}

// TODO: сделать подробную проверку на валидацию