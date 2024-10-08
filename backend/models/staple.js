const mongoose = require('mongoose');

// схема конюшни
const stapleSchema = new mongoose.Schema({
  openedOn: Date, // дата открытия
  name: String, // имя конюшни
  adress: String, // адрес конюшни
  photo: String, // фото конюшни
  website: String, // сайт конюшни
  social: String, // социальные сети
  phoneNumber: String, // телефон конюшни
  comments: String, // комментарии
  closed: Boolean, // закрыто ли конюшня
}, { timestamps: true });

module.exports = mongoose.model('staple', stapleSchema);
