const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
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

module.exports = mongoose.model('record', recordSchema);