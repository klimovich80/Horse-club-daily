const { Schema, model } = require('mongoose');
const { isUrl, isDate, isMobilePhone } = require('validator'); // проверка url

// схема конюшни
const stapleSchema = new Schema({
  openedOn: Date, // дата открытия
  name: String, // имя конюшни
  address: String, // адрес конюшни
  photo: String, // фото конюшни
  website: String, // сайт конюшни
  social: String, // социальные сети
  phoneNumber: String, // телефон конюшни
  comments: String, // комментарии
  closedOn: Boolean, // закрыто ли конюшня
}, { timestamps: true });

module.exports = model('staple', stapleSchema);
