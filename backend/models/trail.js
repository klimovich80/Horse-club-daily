
const { Schema, model } = require('mongoose');
const { isDate, isURL } = require('validator');

const trailSchema = new Schema({
  //имя маршрута
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // дата создания
  creationDate: {
    type: [Date, String],
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (creationDate) => { isDate(creationDate) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  //фото маршрута, если неизвестно, то 'http://vk.com'
  image: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // шагом
  march: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: true,
  },
  // рысью
  trot: {
    type: Boolean,
    rrequired: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // галопом
  gallop: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // прыгать
  jump: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // описание маршрута
  about: {
    type: String,
    maxLength: [300, 'Поле должно содержать меньше 300 символов'],
  },
}, { timestamps: true });

// экспортируем модель
module.exports = model('trail', trailSchema);
