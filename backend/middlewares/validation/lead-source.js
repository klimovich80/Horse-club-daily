const { celebrate, Joi } = require('celebrate');
const { httpRegExp, emailRegExp } = require('../../validation/validate')
//функции валидации

//--лиды--
//получение лидов по id
const validateLeadSourceById = celebrate({
  params: Joi.object().keys({
    leadSourceId: Joi.string().hex().length(24),
  }),
});
//добавление лида
const validateLeadSourceAdd = celebrate({ body: Joi.object().keys({}) });
//обновление данных лида
const validateLeadSourceUpdate = celebrate({ body: Joi.object().keys({}) });

module.exports = {
  validateLeadSourceById,
  validateLeadSourceAdd,
  validateLeadSourceUpdate
}