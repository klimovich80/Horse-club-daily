const mongoose = require('mongoose');

//создаем модель для таблицы лошадей
const horseSchema = new mongoose.Schema({
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
});

// экспортируем модель
module.exports = mongoose.model('horse', horseSchema);