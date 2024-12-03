const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

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

module.exports = {
  validateRecordById,
  validateRecordAdd,
  validateRecordUpdate,
}

// TODO: сделать подробную проверку на валидацию