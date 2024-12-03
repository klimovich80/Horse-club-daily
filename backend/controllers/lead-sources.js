// контроллер лида
const leadSourceModel = require('../models/lead_source');
// контроллеры ошибок
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех лидов из БД и отправка клиентов в ответе
const getLeadSources = (req, res, next) => {
  leadSourceModel.find({})
    .then((leadSources) => res.status(OK_STATUS).send(leadSources))
    .catch((err) => errorHandler(err, next));

}

// получение лида по id
const getLeadSourceById = (req, res, next) => {
  leadSourceModel.findById(req.params.leadSource_id)
    .orFail(() => { throw new Error.DocumentNotFoundError(); })
    .then((leadSource) => res.status(OK_STATUS).send(leadSource))
    .catch((err) => errorHandler(err, next));
}

// создание лида в БД
const createLeadSource = (req, res, next) => {
  leadSourceModel.create(req.body)
    .then((leadSource) => res.status(CREATED_STATUS).send(leadSource))
    .catch((err) => errorHandler(err, next));
}

// удаление лида из БД по id
const deleteLeadSource = (req, res, next) => {
  leadSourceModel.findByIdAndDelete(req.params.leadSource_id)
    .then((leadSource) => res.status(OK_STATUS).send(leadSource))
    .catch((err) => errorHandler(err, next));
}

//обновление лида в БД по id
const updateLeadSource = (req, res, next) => {
  leadSourceModel.findByIdAndUpdate(req.params.leadSource_id, req.body, { new: true })
    .then((leadSource) => res.status(OK_STATUS).send(leadSource))
    .catch((err) => errorHandler(err, next));
}

// экспортируем контроллеры лидов
module.exports = {
  getLeadSources,
  getLeadSourceById,
  createLeadSource,
  deleteLeadSource,
  updateLeadSource,
};