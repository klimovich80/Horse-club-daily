const { Schema, model } = require('mongoose');
const { isDate, isURL, isCurrency, isMobilePhone } = require('validator');

// создаем модель владельцев лошадей
const ownerSchema = new Schema({
  // пользователь или клиент?
  isUser: {
    type: Boolean,
    default: true
  },
  info: {
    type: Schema.Types.ObjectId,
    ref: function () {
      return this.isUser ? 'user' : 'client';
    }
  }
});

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
    type: Date,
    minlength: [6, 'Дата должна быть более 6 символов'],
    maxlength: [10, 'Дата должна быть меньше 10 символов'],
    validate: {
      validator: (dateOfBirth) => { isDate(dateOfBirth) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // масть лошади
  color: {
    type: String,
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
    default: 'n/a'

  },
  // порода лошади
  breed: {
    type: String,
    minlength: [2, 'Имя должно быть больше 2 символов'],
    maxlength: [30, 'Имя должно быть меньше 30 символов'],
    default: 'БП'
  },
  // рост лошади
  height: {
    type: Number,
    default: '150'
  },
  // вес лошади
  weight: {
    type: Number,
    default: '500'
  },
  // владелец лошади
  owner: {
    type: ownerSchema,
    required: [true, 'Это поле обязательно для заполнения'],
    default: {}
  },
  //  цена лошади
  price: {
    type: Number,
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
    type: Date,
    minlength: [6, 'Дата должна быть более 6 символов'],
    maxlength: [10, 'Дата должна быть мен6е 10 символов'],
    validate: {
      validator: (dateOfLastVaccination) => { isDate(dateOfLastVaccination) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // дата последней глистовки
  dateOfLastAnthelmintic: {
    type: Date,
    minlength: [6, 'Дата должна быть более 6 символов'],
    maxlength: [10, 'Дата должна быть мен6е 10 символов'],
    validate: {
      validator: (dateOfLastAnthelmintic) => { isDate(dateOfLastAnthelmintic) }, // проверка даты
      message: 'Дата должна быть в формате YYYY-MM-DD'   // сообщение об ошибке
    }
  },
  // номер чипа (возможна смена на другой тип данных)
  rfId: {
    type: String,
    length: [15, 'Номер должен содержать 15 цифр'],
    default: "000000000000000"
  },
  // комментарии
  comments: {
    type: String,
  },
}, { timestamps: true });

// экспортируем модель
module.exports = model('horse', horseSchema);