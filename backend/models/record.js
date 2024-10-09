const { Schema, model } = require('mongoose');
const { isUrl, isDate, isMobilePhone } = require('validator'); // для проверки url на валидность

const recordSchema = new Schema({
  // дата прогулки
  date: {
    type: Date,
    default: Date.now
  },
  // время прогулки
  time: {
    type: Date
  },
  // маршрут прогулки
  route: {
    type: String
  },
  // количество человек
  people: {
    type: Number,
  },
  // количество детей
  kids: {
    type: Number,
  },
  // количество инструкторов
  coaches: {
    type: Number,
  },
  // количество лошадей
  horses: {
    type: Number,
  },
  // телефон для связи
  phoneNumber: {
    type: Number,
  },
  // социальная сеть
  socialNetwork: {
    type: String
  },
  // источник лида
  leadSource: {
    type: String
  },
  // комментарии
  comments: {
    type: String
  },
}, { timestamps: true });

module.exports = model('record', recordSchema);