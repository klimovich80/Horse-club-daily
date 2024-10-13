const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../validation/validate')
//функции валидации

//--события--
//получение события по id
const validateEventById = celebrate({
  params: Joi.object().keys({
    eventId: Joi.string().hex().length(24),
  }),
});
//добавление события
const validateEventAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных события
const validateEventUpdate = celebrate({ body: Joi.object().keys({}) });


module.exports = {
  validateEventById,
  validateEventAdd,
  validateEventUpdate,
}