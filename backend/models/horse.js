const { Schema, model } = require('mongoose');
const { isDate, isURL, isCurrency, isMobilePhone } = require('validator');

//создаем модель для таблицы лошадей
const horseSchema = new Schema({
  // имя лошади
  name: {
    type: String,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
  },
  // дата рождения лошади
  dateOfBirth: {
    type: [Date, String],
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfBirth) => { isDate(dateOfBirth) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // масть лошади
  color: {
    type: String,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
  },
  // порода лошади
  breed: {
    type: String,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
    default: 'БП'
  },
  // владелец лошади
  owner: {
    type: String,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
    phone: {
      type: String,
      unique: [true, 'Этот номер телефона уже есть в базе данных'],
      validate: {
        validator: (phone) => isMobilePhone(phone), // проверка на валидность телефона
        message: 'Номер телефона должен состоять из 11 цифр' // сообщение об ошибке
      }
    },
    default: 'неизвестен'
  },
  //  цена лошади
  price: {
    type: Number,
    required: [true, 'Это поле обязательно для заполнения'],
    min: [1, 'Цена должна быть больше 0'],
    minlength: [1, 'Цена должна быть больше 1 символов'],
    maxlength: [30, 'Цена должна быть меньше 30 символов'],
    validator: {
      validator: (price) => { isCurrency(price) }, // проверка цены лошади
      message: 'Цена должна быть в формате 123,45'   // сообщение об ошибке
    },
    default: '1'
  },
  // фото лошади
  image: {
    type: String,
    validate: {
      validator: (url) => { isURL(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  },
  // дата последней прививки
  dateOfLastVaccination: {
    type: [Date, String],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfLastVaccination) => { isDate(dateOfLastVaccination) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // дата последней глистовки
  dateOfLastAnthelmintic: {
    type: [Date, String],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfLastAnthelmintic) => { isDate(dateOfLastAnthelmintic) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // номер чипа (возможна смена на другой тип данных)
  rfId: {
    type: String,
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
  },
  // комментарии
  comments: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  },
}, { timestamps: true });

// экспортируем модель
module.exports = model('horse', horseSchema);