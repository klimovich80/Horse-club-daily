// контроллер маршрута
const trailModel = require('../models/trail');
// контроллеры ошибок
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех маршрутов из БД и отправка клиентов в ответе
const getTrails = (req, res, next) => {
  trailModel.find({})
    .then((trails) => res.status(OK_STATUS).send(trails))
    .catch((err) => errorHandler(err, next));

}

// получение интсруктора по id
const getTrailById = (req, res, next) => {
  trailModel.findById(req.params.trail_id)
    .orFail(() => { throw new Error.DocumentNotFoundError(); })
    .then((trail) => res.status(OK_STATUS).send(trail))
    .catch((err) => errorHandler(err, next));
}

// создание интсруктора в БД
const createTrail = (req, res, next) => {
  trailModel.create(req.body)
    .then((trail) => res.status(CREATED_STATUS).send(trail))
    .catch((err) => errorHandler(err, next));
}

// удаление интсруктора из БД по id
const deleteTrail = (req, res, next) => {
  trailModel.findByIdAndDelete(req.params.trail_id)
    .then((trail) => res.status(OK_STATUS).send(trail))
    .catch((err) => errorHandler(err, next));
}

//обновление интсруктора в БД по id
const updateTrail = (req, res, next) => {
  trailModel.findByIdAndUpdate(req.params.trail_id, req.body, { new: true })
    .then((trail) => res.status(OK_STATUS).send(trail))
    .catch((err) => errorHandler(err, next));
}

// экспортируем контроллеры маршрутов
module.exports = {
  getTrails,
  getTrailById,
  createTrail,
  deleteTrail,
  updateTrail,
};