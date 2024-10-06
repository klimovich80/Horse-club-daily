const mongoose = require('mongoose');

//создаем модель для таблицы лошадей
const horseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
  breed: String,
  owner: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('horse', horseSchema);