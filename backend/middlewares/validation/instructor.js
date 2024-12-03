const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

//--инструкторы--
//получение инструкторов по id
const validateInstructorById = celebrate({
  params: Joi.object().keys({
    instructorId: Joi.string().hex().length(24),
  }),
});
//добавление инструктора
const validateInstructorAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных инструктора
const validateInstructorUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateInstructorById,
  validateInstructorAdd,
  validateInstructorUpdate
}