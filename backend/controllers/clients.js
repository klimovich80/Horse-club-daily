// контроллеры клиентов
const clientModel = require('../models/client');

// получение всех клиентов из БД и отправка клиентов в ответе
const getClients = (req, res) => {
  clientModel.find({})
    .then((clients) => {
      res.send(clients);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
};

// получение клиента по id из БД и отправка клиента в ответе
const getClientById = (req, res) => {
  clientModel.findById(req.params.client_id)
    .then((client) => {
      res.send(client);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
};

// создание клиента в БД и отправка клиентав ответе
const createClient = (req, res) => {
  clientModel.create(req.body)
    .then((client) => {
      res.status(201).send(client);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
};

// удаление клиента из БД и отправка клиента в ответе
const deleteClient = (req, res) => {
  clientModel.findByIdAndDelete(req.params.client_id)
    .then((client) => {
      res.send(client);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
};
// экспортируем контроллер клиентов
module.exports = {
  getClients,
  getClientById,
  createClient,
  deleteClient,
};

// TODO:
// обновить данные клиента в БД