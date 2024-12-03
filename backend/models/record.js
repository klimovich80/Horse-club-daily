const { Schema, model } = require('mongoose');
const { isUrl, isDate, isMobilePhone, isTime } = require('validator'); // для проверки url на валидность

const recordSchema = new Schema({
  // дата прогулки
  date: {
    type: Date,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [10, 'Поле должно содержать меньше 10 символов, Вы ввели: {VALUE}'],
    default: Date.now
  },
  // время прогулки
  time: {
    type: Date,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [4, 'Поле должно содержать меньше 4 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (time) => isTime(time),
      message: '{VALUE} is not a valid time'
    }
  },
  // маршрут прогулки
  route: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [4, 'Поле должно содержать больше 4 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
    default: 'тренировка'
  },
  // количество человек
  people: {
    type: Number,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [1, 'Поле должно содержать больше 1 символов, Вы ввели: {VALUE}'],
    maxLength: [2, 'Поле должно содержать меньше 2 символов, Вы ввели: {VALUE}'],
  },
  // количество детей
  kids: {
    type: Number,
    minLength: [1, 'Поле должно содержать больше 1 символов, Вы ввели: {VALUE}'],
    maxLength: [2, 'Поле должно содержать меньше 2 символов, Вы ввели: {VALUE}'],
    default: 0
  },
  // количество инструкторов требуемых
  coaches: {
    type: Number,
    minLength: [1, 'Поле должно содержать больше 1 символов, Вы ввели: {VALUE}'],
    maxLength: [2, 'Поле должно содержать меньше 2 символов, Вы ввели: {VALUE}'],
    default: 1
  },
  // количество инструкторов в наличии
  coachesAvailable: {
    type: Number,
    minLength: [1, 'Поле должно содержать больше 1 символов, Вы ввели: {VALUE}'],
    maxLength: [2, 'Поле должно содержать меньше 2 символов, Вы ввели: {VALUE}'],
    default: 1
  },
  // количество лошадей
  horses: {
    type: Number,
    minLength: [1, 'Поле должно содержать больше 1 символов, Вы ввели: {VALUE}'],
    maxLength: [2, 'Поле должно содержать меньше 2 символов, Вы ввели: {VALUE}'],
    default: 0
  },
  // телефон для связи
  phoneNumber: {
    type: Number,
    validate: {
      validator: (phoneNumber) => isMobilePhone(phoneNumber),
      message: 'Номер телефона должен состоять из 11 цифр'
    }
  },
  // социальная сеть
  socialNetwork: {
    type: String,
    validate: {
      validator: (url) => isUrl(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    },
    default: 'https://www.google.com'
  },
  // источник лида
  leadSource: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  },
  // комментарии
  comments: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  },
}, { timestamps: true });

module.exports = model('record', recordSchema);
