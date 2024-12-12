const { celebrate, Joi } = require('celebrate');
const { httpRegExp, chipNumberRegExp } = require('../../validation/validate')
//функции валидации

//--лошади--
//получение лошади по id
const validateHorseById = celebrate({
  params: Joi.object().keys({
    horse_id: Joi.string().hex().length(24),
  }),
});
//данные лошади
const validateHorseData = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(50),
    dateOfBirth: Joi.date(),
    color: Joi.string(),
    breed: Joi.string(),
    height: Joi.number(),
    weight: Joi.number(),
    owner: Joi.string(),
    price: Joi.number(),
    image: Joi.string().regex(httpRegExp),
    dateOfLastVaccination: Joi.date(),
    dateOfLastAnthelmintic: Joi.date(),
    rfId: Joi.string().regex(chipNumberRegExp),
    comments: Joi.string(),
  })
});

module.exports = {
  validateHorseById,
  validateHorseData
}

// TODO: сделать подробную проверку на валидацию
