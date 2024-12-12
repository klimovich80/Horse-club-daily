const { Schema, model } = require('mongoose');
const { isURL, isDate, isMobilePhone, isEmail } = require('validator');

const daySchema = new Schema({
  dayOff: {
    type: Boolean,
    default: false
  },
  startTime: {
    type: Number,

    default: 8
  },
  endTime: {
    type: Number,

    default: 17
  }
});

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
      validator: (url) => { isURL(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // фото конюшни
  website: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isURL(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  }, // сайт конюшни
  social: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    validate: {
      validator: (url) => { isURL(url) },
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
  }, // закрыта ли конюшня?(возможна отмена поля)
  email: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    unique: [true, 'этот email {VALUE} уже есть в базе данных'],
    validate: {
      validator: (email) => isEmail(email), // проверка на валидность email
      message: 'Email должен быть в формате me@mail.any' // сообщение об ошибке
    }
  },
  // график работы
  days: {
    type: [daySchema],
    default: [
      { weekDay: 'Понедельник' },
      { weekDay: 'Вторник' },
      { weekDay: 'Среда' },
      { weekDay: 'Четверг' },
      { weekDay: 'Пятница' },
      { weekDay: 'Суббота' },
      { weekDay: 'Воскресенье' }
    ]
  }
}, { timestamps: true });

stapleSchema.save

module.exports = model('staple', stapleSchema);

//TODO проверить схему на Postman