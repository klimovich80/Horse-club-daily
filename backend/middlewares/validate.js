const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../validation/validate')
//функции валидации

//--пользователи--
//регистрации пользователя
const validateUserRegistration = celebrate({
  body: Joi.object().keys({})
})
//авторизация пользователя по логину и паролю
const validateUserLogin = celebrate({ body: Joi.object().keys({}) })
//обновления данных пользователя
const validateUserUpdate = celebrate({ body: Joi.object().keys({}) })
//получение пользователя по id
const validateUserById = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});


//--клиенты--
//получение клиентов по id
const validateClientrById = celebrate({
  params: Joi.object().keys({
    clientId: Joi.string().hex().length(24),
  }),
});
//добавление клиента
const validateClientrAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных клиента
const validateClientrUpdate = celebrate({ body: Joi.object().keys({}) });


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

//--записи--
//получение записи по id
const validateRecordById = celebrate({
  params: Joi.object().keys({
    recordId: Joi.string().hex().length(24),
  }),
});
//добавление записи
const validateRecordAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных записи
const validateRecordUpdate = celebrate({ body: Joi.object().keys({}) });

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
  validateUserRegistration, validateUserLogin, validateUserUpdate, validateUserById,
  validateClientrById, validateClientrAdd, validateClientrUpdate,
  validateEventById, validateEventAdd, validateEventUpdate,
  validateHorseById, validateHorseAdd, validateHorseUpdate,
  validateRecordById, validateRecordAdd, validateRecordUpdate,
  validateStapleById, validateStapleAdd, validateStapleUpdate,
}