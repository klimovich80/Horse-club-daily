//контроллер событий
const eventModel = require('../models/event');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');
//создание события
const createEvent = async (req, res, next) => {
  eventModel.create(req.body)
    .then((event) => res.status(CREATED_STATUS).send(event))
    .catch((err) => errorHandler(err, next));
}
//обновление события
const updateEvent = (req, res, next) => {
  eventModel.findByIdAndUpdate(req.params.event_id, req.body, { new: true }) //получение одного события по id
    .then(event => res.status(CREATED_STATUS_STATUS).send(event))
    .catch(err => errorHandler(err, next));
}
//удаление события
const deleteEvent = (req, res, next) => {
  eventModel.findByIdAndDelete(req.params.event_id)
    .then((event) => res.status(OK_STATUS).send(event))
    .catch(err => errorHandler(err, next));
}
//получение всех событий
const getEvents = (req, res, next) => {
  eventModel.find({})
    .then((events) => res.status(OK_STATUS).send(events))
    .catch(err => errorHandler(err, next));
}
//получение одного события по id
const getEvent = (req, res, next) => {
  eventModel.findById(req.params.event_id)
    .then((event) => res.status(OK_STATUS).send(event))
    .catch(err => errorHandler(err, next));
}

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getEvent
}
