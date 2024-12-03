
const { Schema, model } = require('mongoose');
const { isURL } = require('validator');

const leadSourceSchema = new Schema({
  //имя лида
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // линк лида
  link: {
    type: String,
    default: 'http://vk.com',
    validate: {
      validator: (url) => isURL(url), // проверка на валидность ссылки на фото
      message: 'Фото должно быть в формате ссылки типа https://example.com' // сообщение об ошибке
    }
  },
  // описание лида
  about: {
    type: String,
    maxLength: [300, 'Поле должно содержать меньше 300 символов'],
  },
}, { timestamps: true });

// экспортируем модель
module.exports = model('leadSource', leadSourceSchema);
