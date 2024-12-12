const { celebrate, Joi } = require('celebrate');
const { httpRegExp } = require('../../validation/validate')
//функции валидации

//--события--
//получение события по id
const validateEventById = celebrate({
  params: Joi.object().keys({
    event_id: Joi.string().hex().length(24),
  }),
});
//добавление события
const validateEventData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    image: Joi.string().pattern(httpRegExp),
    price: Joi.number().default(0),
    march: Joi.boolean().default(true),
    trot: Joi.boolean().default(false),
    gallop: Joi.boolean().default(false),
    jump: Joi.boolean().default(false),
    comments: Joi.string(),

  })
});


module.exports = {
  validateEventById,
  validateEventData
}

// TODO: сделать подробную проверку на валидацию