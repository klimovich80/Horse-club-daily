const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

//--конюшни--
//получение конюшни по id
const validateStapleById = celebrate({
  params: Joi.object().keys({
    stapleId: Joi.string().hex().length(24),
  }),
});
//добавление конюшни
const validateStapleAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных конюшни
const validateStapleUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateStapleById,
  validateStapleAdd,
  validateStapleUpdate,
}

// TODO: сделать подробную проверку на валидацию