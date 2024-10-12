const { Error } = require('mongoose');// контроллер ошибок
// контроллеры клиентов
const clientModel = require('../models/client');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех клиентов из БД и отправка клиентов в ответе
const getClients = (req, res, next) => {
  clientModel.find({})
    .then((clients) => res.status(OK_STATUS).send(clients))
    .catch((err) => errorHandler(err, next));
};

// получение клиента по id из БД и отправка клиента в ответе
const getClientById = (req, res, next) => {
  clientModel.findById(req.params.client_id)
    .then((client) => res.status(OK_STATUS).send(client))
    .catch((err) => errorHandler(err, next));
};

// создание клиента в БД и отправка клиентав ответе
const createClient = (req, res, next) => {
  clientModel.create(req.body)
    .then((client) => res.status(CREATED_STATUS).send(client))
    .catch((err) => errorHandler(err, next));
};

// удаление клиента из БД и отправка клиента в ответе
const deleteClient = (req, res, next) => {
  clientModel.findByIdAndDelete(req.params.client_id)
    .then((client) => res.status(OK_STATUS).send(client))
    .catch((err) => errorHandler(err, next));
};

// обновление данных клиента в БД и отправка клиента в ответе
const updateClient = (req, res, next) => {
  clientModel.findByIdAndUpdate(req.params.client_id, req.body, { new: true })
    .then((client) => res.status(OK_STATUS).send(client))
    .catch((err) => errorHandler(err, next));
};
// экспортируем контроллер клиентов
module.exports = {
  getClients,
  getClientById,
  createClient,
  deleteClient,
  updateClient
};