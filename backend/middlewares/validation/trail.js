const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

//--маршруты--
//получение маршрутов по id
const validateTrailById = celebrate({
  params: Joi.object().keys({
    trailId: Joi.string().hex().length(24),
  }),
});
//добавление маршрута
const validateTrailAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных маршрута
const validateTrailUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateTrailById,
  validateTrailAdd,
  validateTrailUpdate
}