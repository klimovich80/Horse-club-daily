// контроллер инструктора
const instructorModel = require('../models/instructor');
// контроллеры ошибок
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('./errors');

// получение всех инструкторов из БД и отправка клиентов в ответе
const getInstructors = (req, res, next) => {
  instructorModel.find({})
    .then((instructors) => res.status(OK_STATUS).send(instructors))
    .catch((err) => errorHandler(err, next));

}

// получение интсруктора по id
const getInstructorById = (req, res, next) => {
  instructorModel.findById(req.params.instructor_id)
    .orFail(() => { throw new Error.DocumentNotFoundError(); })
    .then((instructor) => res.status(OK_STATUS).send(instructor))
    .catch((err) => errorHandler(err, next));
}

// создание интсруктора в БД
const createInstructor = (req, res, next) => {
  instructorModel.create(req.body)
    .then((instructor) => res.status(CREATED_STATUS).send(instructor))
    .catch((err) => errorHandler(err, next));
}

// удаление интсруктора из БД по id
const deleteInstructor = (req, res, next) => {
  instructorModel.findByIdAndDelete(req.params.instructor_id)
    .then((instructor) => res.status(OK_STATUS).send(instructor))
    .catch((err) => errorHandler(err, next));
}

//обновление интсруктора в БД по id
const updateInstructor = (req, res, next) => {
  instructorModel.findByIdAndUpdate(req.params.instructor_id, req.body, { new: true })
    .then((instructor) => res.status(OK_STATUS).send(instructor))
    .catch((err) => errorHandler(err, next));
}

// экспортируем контроллеры инструкторов
module.exports = {
  getInstructors,
  getInstructorById,
  createInstructor,
  deleteInstructor,
  updateInstructor,
};