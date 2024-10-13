// контроллеры клиентов
const recordModel = require('../models/record');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех записей
const getRecords = (req, res, next) => {
  recordModel.find({})
    .then((records) => res.status(OK_STATUS).send(records))
    .catch((err) => errorHandler(err, next));
}
// получение записи по id
const getRecordById = (req, res, next) => {
  recordModel.findById(req.params.record_id)
    .orFail(() => { throw new Error.DocumentNotFoundError(); })
    .then((record) => res.status(OK_STATUS).send(record))
    .catch((err) => errorHandler(err, next));
}
// создание записи
const createRecord = (req, res, next) => {
  recordModel.create(req.body) // запись в базе
    .then((record) => res.status(CREATED_STATUS).send(record))
    .catch((err) => errorHandler(err, next));
}
// обновление записи
const updateRecord = (req, res, next) => {
  recordModel.findByIdAndUpdate(req.params.record_id, req.body) // запись в базе
    .then((record) => res.status(OK_STATUS).send(record))
    .catch((err) => errorHandler(err, next));
}
// удаление записи
const deleteRecord = (req, res, next) => {
  recordModel.findByIdAndDelete(req.params.record_id) // запись в базе
    .then((record) => res.status(OK_STATUS).send(record))
    .catch((err) => errorHandler(err, next));
}

//экспортируем контроллер записей
module.exports = {
  getRecords,
  getRecordById,
  createRecord,
  updateRecord,
  deleteRecord
}