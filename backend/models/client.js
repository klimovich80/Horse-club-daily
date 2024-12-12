const { Schema, model } = require('mongoose');
const { isURL, isMobilePhone, isDate, isEmail } = require('validator'); // проверка url на валидность
// схема ребенка клиента
const childSchema = new Schema({
  // имя клиента
  firstName: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // фамилия клиента
  lastName: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
    default: 'неизвестно',
  },
  // телефон клиента, если неизвестно, то +79781234567
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
    type: Date,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfBirth) => { isDate(dateOfBirth) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // фото клиента, если неизвестно, то 'http://vk.com'
  avatar: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // vk клиента, если неизвестно, 'http://vk.com'
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
  // заполнил ли журнал безопасности
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

// схема клиента
const clientSchema = new Schema({
  // имя клиента
  firstName: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // фамилия клиента
  lastName: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
    default: 'неизвестно',
  },
  // адрес клиента
  address: {
    type: String,
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [300, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // телефон клиента, если неизвестно, то +79781234567
  phone: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    validate: {
      validator: (phone) => isMobilePhone(phone), // проверка на валидность телефона
      message: 'Номер телефона должен состоять из 11 цифр' // сообщение об ошибке
    },
    default: '+79780000000',
  },
  // источник клиента, если неизвестно, то неизвестно
  source: {
    type: String,
    default: 'неизвестно',
  },
  // дата рождения
  dateOfBirth: {
    type: Date,
    required: [true, 'Это поле обязательно для заполнения'],
    minlength: [2, 'Дата должна быть больше 2 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfBirth) => { isDate(dateOfBirth) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // телефон для связи с родителями
  parentNumber: {
    type: Number,
    validate: {
      validator: (phoneNumber) => isMobilePhone(phoneNumber),
      message: 'Номер телефона должен состоять из 11 цифр'
    }
  },
  // дети клиента, если неизвестно, то false
  childBool: {
    type: Boolean,
    default: false,
  },
  // количество детей
  childCount: {
    type: Number,
    default: 0
  },
  // информация о ребенке
  child: [childSchema],
  // группа клиентов, если неизвестно, то false?(не понятно нужно ли это поле)
  group: {
    type: Boolean,
    default: false,
  },
  // фото клиента, если неизвестно, то 'http://vk.com'
  avatar: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // vk клиента, если неизвестно, 'http://vk.com'
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
  // элекронный адрес клиента
  email: {
    type: String,
    validate: {
      validator: (email) => isEmail(email),
      message: 'Email должен быть в формате example@example.com'
    }
  },
  // пол клиента
  sex: {
    type: Boolean,
    default: true,
  },
  // продвинутый клиент, если неизвестно, false
  advanced: {
    type: Boolean,
    default: false,
  },
  // в первый разклиент, если неизвестно, false
  firstTime: {
    type: Boolean,
    default: true,
  },
  // умеет шагом? если неизвестно, false
  march: {
    type: Boolean,
    default: true,
  },
  // умееет рысью? если неизвестно, false
  trot: {
    type: Boolean,
    default: false,
  },
  // умеет галопом? если неизвестно, false
  gallop: {
    type: Boolean,
    default: false,
  },
  // умеет прыгать? если неизвестно, false
  jump: {
    type: Boolean,
    default: false,
  },
  // заполнил ли журнал безопасности
  safety: {
    type: Boolean,
    default: false,
  },
  // описание клиента
  about: {
    type: String,
    maxLength: [300, 'Поле должно содержать меньше 300 символов'],
  },
}, { timestamps: true });

module.exports = model('client', clientSchema);

// TODO возможно использовать ref
