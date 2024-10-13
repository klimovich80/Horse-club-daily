const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../validation/validate')
//функции валидации

//--лошади--
//получение лошади по id
const validateHorseById = celebrate({
  params: Joi.object().keys({
    horseId: Joi.string().hex().length(24),
  }),
});
//добавление лошади
const validateHorseAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных лошади
const validateHorseUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateHorseById,
  validateHorseAdd,
  validateHorseUpdate
}