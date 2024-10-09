const { Schema, model } = require('mongoose');
const { isDate } = require('validator');

//создаем модель для таблицы лошадей
const horseSchema = new Schema({
  // имя лошади
  name: String,
  // возраст лошади в годах
  dateOfBirth: Date,
  // масть лошади
  color: String,
  // порода лошади
  breed: String,
  // владелец лошади
  owner: String,
  //  цена лошади
  price: Number,
  // фото лошади
  image: String
}, { timestamps: true });

// экспортируем модель
module.exports = model('horse', horseSchema);