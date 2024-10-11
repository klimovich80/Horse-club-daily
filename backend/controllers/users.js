const bcrypt = require('bcrypt');//npm install bcrypt
const jwt = require('jsonwebtoken');//npm install jsonwebtoken
const userModel = require('../models/user');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('../config');
const { SALT_ROUNDS, jwtSecretCheck } = require('../config');

// проверяет переданные в почту псевдоним и пароль
// и возвращает  JWT
const login = (req, res, next) => {
  const { nickname, password } = req.body; // получаем данные из формы
  return userModel.findUserByCredential(nickname, password)
    .then(user => {
      const token = jwt.sign(
        { _id: user._id },//получаем id пользователя
        jwtSecretCheck(),//секретный ключ
        { expiresIn: '1d' }//время жизни токена
      );
      res.send({ token })// отправляем токен
    })
    .catch((error) => {
      errorHandler(error, next);
    })
}

// создает пользователя с переданными в теле
// пароль и псевдонимом
const createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, SALT_ROUNDS) //хешируем пароль и сохраняем в базе
    .then((hash) => {
      userModel.create({
        ...req.body,
        nickname: req.body.nickname,
        password: hash
      })
    })
    .then((user) => {
      res.status(CREATED_STATUS).send({
        nickname: user.nickname,
      })
    })
    .catch((error) => {
      errorHandler(error, next);
    })
};

// обновляем информацию о пользователе
const updateUser = (req, res, next) => {
  userModel.findByIdAndUpdate(req.user_id, {
    nickname: req.body.nickname,
  }, {
    new: true, // возвращаем только измененные данные
    runValidators: false, // не проверяем валидацию
  })
    .then((user) => res.status(OK_STATUS).send(user))
    .catch((error) => errorHandler(error, next));
};
//получает всех пользователей
const getUsers = (req, res, next) => {
  userModel.find({})
    .then((users) => res.status(OK_STATUS).send(users))// отправляем пользователей
    .catch((error) => errorHandler(error, next));
}

//получает информацию о пользователе
const getUser = (req, res, next) => {
  userModel.findById(req.user_id) //получаем данные о пользователе
    .then((user) => res.status(OK_STATUS).send(user))
    .catch((error) => errorHandler(error, next));
};

// удаляет пользователя
const deleteUser = (req, res, next) => {
  userModel.findByIdAndDelete(req.user_id)
    .then(() => res.status(OK_STATUS).send())
    .catch((error) => errorHandler(error, next));
};

//экспортируем модель
module.exports = {
  login,
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser
};