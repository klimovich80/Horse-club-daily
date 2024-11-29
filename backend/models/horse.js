const { Schema, model } = require('mongoose');
const { isDate, isCurrency } = require('validator');

//создаем модель для таблицы лошадей
const horseSchema = new Schema({
  // имя лошади
  name: {
    type: String,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
  },
  // возраст лошади в годах
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
      validator: (url) => { isUrl(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }
}, { timestamps: true });

// экспортируем модель
module.exports = model('horse', horseSchema);

//TODO создать поля: прививки, глистогонки, номер чипа, телефон владельца, комментарии