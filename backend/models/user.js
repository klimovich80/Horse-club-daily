// подключаем монгус
const { Schema, model } = require('mongoose');
// подключаем проверку email и тп
const { isEmail, isMobilePhone, isURL } = require('validator')
// подключаем bcrypt для хэширования
const bcrypt = require('bcrypt');
// подключаем ошибку авторизации
const UnauthorizedError = require('../errors/UnauthorizedError');

// создаем модель пользователя
const userSchema = new Schema({
  firstName: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  lastName: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  nickname: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    unique: [true, 'nickname {VALUE} уже занят'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  email: {
    type: String,
    required: [true, 'это поле обязательно для заполнения, введите email mail@mail.ru'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    unique: [true, 'этот email {VALUE} уже есть в базе данных'],
    validate: {
      validator: (email) => isEmail(email), // проверка на валидность email
      message: 'Email должен быть в формате me@mail.any' // сообщение об ошибке
    }
  },
  password: {
    type: String,
    required: [true, 'Введите пароль для входа'],
    minLength: [6, 'Поле должно содержать больше 6 символов, Вы ввели: {VALUE}'],
    select: false
  },
  phone: {
    type: String,
    unique: [true, 'Этот номер телефона уже есть в базе данных'],
    validate: {
      validator: (phone) => isMobilePhone(phone), // проверка на валидность телефона
      message: 'Номер телефона должен состоять из 11 цифр' // сообщение об ошибке
    }
  },
  photo: {
    type: String,
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  social: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isURL(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // социальные сети
}, { timestamps: true });

// функция поиска пользователя по nickname и паролю
userSchema.static.findUserByCredentials = function (nickname, password) {
  return this.findOne({ nickname }).select('password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Пользователь не найден (Неправильный nickname или пароль)')
      }

      return bcrypt.compare(password, user.password) // проверка на совпадение паролей
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError('Пользователь не найден (Неправильный nickname или пароль)')
          }
          return user
        })
    })
}

module.exports = model('user', userSchema)
