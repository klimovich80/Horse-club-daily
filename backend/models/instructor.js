
const { Schema, model } = require('mongoose');
const { isDate, isURL, isMobilePhone } = require('validator');

const instructorSchema = new Schema({
  //имя клиента
  firstName: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  //фамилия клиента
  lastName: {
    type: String,
    required: false,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
    default: 'неизвестно',
  },
  //телефон клиента, если неизвестно, то +79781234567
  phone: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    validate: {
      validator: (phone) => isMobilePhone(phone), // проверка на валидность телефона
      message: 'Номер телефона должен состоять из 11 цифр' // сообщение об ошибке
    },
    default: '+79780000000',
  },
  // дата рождения
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
  //дети клиента, если неизвестно, то false
  child: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // количество детей
  childNumber: {
    type: Number,
    default: 0
  },
  //фото клиента, если неизвестно, то 'http://vk.com'
  avatar: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  //vk клиента, если неизвестно, 'http://vk.com'
  vk: {
    type: String,
    // unique: true,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // социальная сеть клиента, если неизвестно, 'http://vk.com'
  social: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // умеет шагом? если неизвестно, false
  march: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: true,
  },
  // умееет рысью? если неизвестно, false
  trot: {
    type: Boolean,
    rrequired: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // умеет галопом? если неизвестно, false
  gallop: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // умеет прыгать? если неизвестно, false
  jump: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  //заполнил ли журнал безопасности
  safety: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // описание клиента
  about: {
    type: String,
    maxLength: [300, 'Поле должно содержать меньше 300 символов'],
  },
}, { timestamps: true });

// экспортируем модель
module.exports = model('instructor', instructorSchema);
