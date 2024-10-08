const { Error } = require('mongoose');// контроллер ошибок
// контроллеры конюшен
const stapleModel = require('../models/staple');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех конюшен из БД и отправка конюшен в ответе
const getStaples = (req, res, next) => {
  stapleModel.find({})
    .then((staples) => {
      res.status(OK_STATUS).send(staples);
    })
    .catch((err) => {
      errorHandler(err, next)
    });
};

// получение конюшни по id из БД и отправка конюшни в ответе
const getStapleById = (req, res, next) => {
  stapleModel.findById(req.params.staple_id)
    .then((staple) => {
      res.status(OK_STATUS).send(staple);
    })
    .catch((err) => {
      errorHandler(err, next)
    });
};

// создание конюшни в БД и отправка конюшнив ответе
const createStaple = (req, res, next) => {
  stapleModel.create(req.body)
    .then((staple) => {
      res.status(CREATED_STATUS).send(staple);
    })
    .catch((err) => {
      errorHandler(err, next)
    });
};

// удаление конюшни из БД и отправка конюшни в ответе
const deleteStaple = (req, res, next) => {
  stapleModel.findByIdAndDelete(req.params.staple_id)
    .then((staple) => {
      res.status(OK_STATUS).send(staple);
    })
    .catch((err) => {
      errorHandler(err, next)
    });
};

// обновление данных конюшни в БД и отправка конюшни в ответе
const updateStaple = (req, res, next) => {
  stapleModel.findByIdAndUpdate(req.params.staple_id, req.body, { new: true })
    .then((staple) => {
      res.status(OK_STATUS).send(staple);
    })
    .catch((err) => {
      errorHandler(err, next)
    });
};
// экспортируем контроллер конюшен
module.exports = {
  getStaples,
  getStapleById,
  createStaple,
  deleteStaple,
  updateStaple
};