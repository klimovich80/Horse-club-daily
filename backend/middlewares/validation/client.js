const { celebrate, Joi } = require('celebrate');
const {
  httpRegExp,
  emailRegExp,
  phoneNumberRegExp
} = require('../../validation/validate')
//функции валидации

//--клиенты--
//получение клиентов по id
const validateClientById = celebrate({
  params: Joi.object().keys({
    clientId: Joi.string().hex().length(24),
  }),
});
//добавление клиента
const validateClientAdd = celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    address: Joi.string().min(2).max(300),
    phone: Joi.string().length(10).pattern(phoneNumberRegExp),
    source: Joi.string().min(2).max(30),
    dateOfBirth: Joi.date().iso().required(),//дата рождения
    parentNumber: Joi.string().length(10).pattern(phoneNumberRegExp),
    childBool: Joi.boolean().required().default(false),
    childCount: Joi.number().required().default(0),
    child: Joi.array().items(Joi.object().keys({
      firstName: Joi.string().min(2).max(30).required(),
      lastName: Joi.string().min(2).max(30),
      phone: Joi.string().length(10).pattern(phoneNumberRegExp),
      dateOfBirth: Joi.date().iso().required(),//дата рождения
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
    group: Joi.boolean().required().default(false),
    avatar: Joi.string().min(2).max(200).pattern(httpRegExp),
    vk: Joi.string().min(2).max(200).pattern(httpRegExp),
    social: Joi.string().min(2).max(200).pattern(httpRegExp),
    email: Joi.string().pattern(emailRegExp).required(),
    sex: Joi.boolean().required().default(true),//пол по умолчанию мужской
    advanced: Joi.boolean().required().default(false),
    firstTime: Joi.boolean().required().default(true),
    march: Joi.boolean().required().default(true),
    trot: Joi.boolean().required().default(false),
    gallop: Joi.boolean().required().default(false),
    jump: Joi.boolean().required().default(false),
    safety: Joi.boolean().required().default(false),
    about: Joi.string().max(300),
  })
});
//обновление данных клиента
const validateClientUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateClientById,
  validateClientAdd,
  validateClientUpdate
}

// TODO: сделать подробную проверку на валидацию
// TODO валидировать номера телефонов, емэйла и ссылок