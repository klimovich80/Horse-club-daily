//контроллеры лошадок
const horseModel = require('../models/horse');

// получение всех лошадок из БД и отправка клиентов в ответе
const getHorses = (req, res) => {
  horseModel.find({})
    .then((horses) => {
      res.send(horses);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Внутренняя ошибка сервера',
        err: err.message,
        stack: err.stack,
      });
    });

}

// получение лошадки по id
const getHorseById = (req, res) => {
  horseModel.findById(req.params.horse_id)
    .then((horse) => {
      res.send(horse);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
}

// создание лошадки в БД
const createHorse = (req, res) => {
  horseModel.create(req.body)
    .then((horse) => {
      res.status(201).send(horse);// 201 - создана лошадка
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
}

// удаление лошадки из БД по id
const deleteHorse = (req, res) => {
  horseModel.findByIdAndDelete(req.params.horse_id)
    .then((horse) => {
      res.send(horse);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal server error',
        err: err.message,
        stack: err.stack,
      });
    });
}

// экспортируем контроллеры лошадок
module.exports = {
  getHorses,
  getHorseById,
  createHorse,
  deleteHorse,
};

// TODO:
// 3. Добавить контроллер для обновления лошадки