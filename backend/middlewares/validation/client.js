const { celebrate, Joi } = require('celebrate');
const {
  httpRegExp,
  emailRegExp,
  phoneNumberRegExp
} = require('../../validation/validate')
// данные для валидации
const bodyData = Joi.object().keys({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).default('неизвестно'),
  address: Joi.string().min(2).max(300),
  phone: Joi.string().length(12).pattern(phoneNumberRegExp),
  source: Joi.string().min(2).max(30),
  dateOfBirth: Joi.date(),
  parentNumber: Joi.string().length(10).pattern(phoneNumberRegExp),
  childBool: Joi.boolean().default(false),
  childCount: Joi.number().default(0),
  child: Joi.array().items(Joi.object().keys({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30),
    phone: Joi.string().length(10).pattern(phoneNumberRegExp),
    dateOfBirth: Joi.date().required(),
    avatar: Joi.string().min(2).max(200).pattern(httpRegExp),
    vk: Joi.string().min(2).max(200).pattern(httpRegExp),
    social: Joi.string().min(2).max(200).pattern(httpRegExp),
    advanced: Joi.boolean().required().default(false),
    firstTime: Joi.boolean().required().default(true),
    march: Joi.boolean().required().default(true),
    trot: Joi.boolean().required().default(false),
    gallop: Joi.boolean().required().default(false),
    jump: Joi.boolean().required().default(false),
    safety: Joi.boolean().required().default(false),
    about: Joi.string().max(300),
  })),//описание детей
  group: Joi.boolean().default(false),
  avatar: Joi.string().min(2).max(200).pattern(httpRegExp),
  vk: Joi.string().min(2).max(200).pattern(httpRegExp),
  social: Joi.string().min(2).max(200).pattern(httpRegExp),
  email: Joi.string().pattern(emailRegExp),
  sex: Joi.boolean().default(true),//пол по умолчанию мужской
  advanced: Joi.boolean().default(false),
  firstTime: Joi.boolean().default(true),
  march: Joi.boolean().default(true),
  trot: Joi.boolean().default(false),
  gallop: Joi.boolean().default(false),
  jump: Joi.boolean().default(false),
  safety: Joi.boolean().default(false),
  about: Joi.string().max(300),
})
//функции валидации

//--клиенты--
//получение клиентов по id
const validateClientById = celebrate({
  params: Joi.object().keys({
    client_id: Joi.string().hex().length(24),
  }),
});
//данных клиента
const validateClientData = celebrate({
  body: bodyData
});

module.exports = {
  validateClientById,
  validateClientData
}

// TODO: сделать подробную проверку на валидацию
// TODO сделать нужный формат даты рождения не YYYY-MM-DD а DD.MM.YYYY