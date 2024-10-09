const { Schema, model } = require('mongoose');
const { isUrl, isDate, isMobilePhone } = require('validator'); // проверка url
const { validate } = require('./record');

// схема конюшни
const stapleSchema = new Schema({
  openedOn: {
    type: Date,
    default: Date.now,
    validate: {
      validator: (date) => (isDate(date)),
      message: '{VALUE} не является датой'
    }
  }, // дата открытия
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  }, // имя конюшни
  address: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  }, // адрес конюшни
  image: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isUrl(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // фото конюшни
  website: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isUrl(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // сайт конюшни
  social: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isUrl(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // социальные сети
  phone: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    validate: {
      validator: (phone) => isMobilePhone(phone), // проверка на валидность телефона
      message: 'Номер телефона должен состоять из 11 цифр' // сообщение об ошибке
    },
    default: '+79780000000',
  }, // телефон конюшни
  comments: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  }, // комментарии
  closed: {
    type: Boolean,
    default: false
  }, // закрыто ли конюшня
}, { timestamps: true });

module.exports = model('staple', stapleSchema);
