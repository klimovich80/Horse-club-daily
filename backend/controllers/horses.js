//контроллеры лошадок
const horseModel = require('../models/horse');
// контроллеры ошибок
const { Error } = require('mongoose');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех лошадок из БД и отправка клиентов в ответе
const getHorses = (req, res, next) => {
  horseModel.find({})
    .then((horses) => res.status(OK_STATUS).send(horses))
    .catch((err) => errorHandler(err, next));

}

// получение лошадки по id
const getHorseById = (req, res, next) => {
  horseModel.findById(req.params.horse_id)
    .orFail(() => { throw new Error.DocumentNotFoundError(); })
    .then((horse) => res.status(OK_STATUS).send(horse))
    .catch((err) => errorHandler(err, next));
}

// создание лошадки в БД
const createHorse = (req, res, next) => {
  horseModel.create(req.body)
    .then((horse) => res.status(CREATED_STATUS).send(horse))
    .catch((err) => errorHandler(err, next));
}

// удаление лошадки из БД по id
const deleteHorse = (req, res, next) => {
  horseModel.findByIdAndDelete(req.params.horse_id)
    .then((horse) => res.status(OK_STATUS).send(horse))
    .catch((err) => errorHandler(err, next));
}

//обновление лошадки в БД по id
const updateHorse = (req, res, next) => {
  horseModel.findByIdAndUpdate(req.params.horse_id, req.body, { new: true })
    .then((horse) => res.status(OK_STATUS).send(horse))
    .catch((err) => errorHandler(err, next));
}

// экспортируем контроллеры лошадок
module.exports = {
  getHorses,
  getHorseById,
  createHorse,
  deleteHorse,
  updateHorse,
};