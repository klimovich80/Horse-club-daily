const { Schema, model } = require('mongoose');
const { isUrl, isMobilePhone } = require('validator'); // проверка url на валидность

// схема клиента
const clientSchema = new Schema({
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
  //источник клиента, если неизвестно, то неизвестно
  source: {
    type: String,
    default: 'неизвестно',
  },
  //возраст клиента
  //TODO переделать под дату рождения
  //TODO если клиент ребенок - добавить родителей как клиентов и ссылки на них в профиле клиента
  age: {
    type: Number,
    required: false,
    min: 1,
    minLength: [1, 'Поле должно содержать больше 0 символов, Вы ввели: {VALUE}'],
    maxLength: [3, 'Поле должно содержать меньше 3 символов, Вы ввели: {VALUE}'],
    default: 1,
  },
  //дети клиента, если неизвестно, то false
  //TODO если дети есть - указать количество
  child: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // группа клиентов, если неизвестно, то false?(не понятно нужно ли это поле)
  group: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  //фото клиента, если неизвестно, то 'http://vk.com'
  avatar: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isUrl(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  //vk клиента, если неизвестно, 'http://vk.com'
  vk: {
    type: String,
    // unique: true,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isUrl(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // социальная сеть клиента, если неизвестно, 'http://vk.com'
  social: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isUrl(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // продвинутый клиент, если неизвестно, false
  advanced: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // в первый разклиент, если неизвестно, false
  firstTime: {
    type: Boolean,
    rrequired: [true, 'это поле обязательно для заполнения'],
    default: true,
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

module.exports = model('client', clientSchema);
