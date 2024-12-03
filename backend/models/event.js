const { Schema, model } = require('mongoose');
//модель создана для описания типов событий типа "прогулка"/"занятие"/"поход"
const eventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  // фото события
  image: {
    type: String,
    validate: {
      validator: (url) => { isUrl(url) },
      message: 'URL должен быть в формате https://www.google.com'
    },
    default: 'https://www.google.com'
  },
  //  длительность события
  price: {
    type: Number,
    min: [1, 'Цена должна быть больше 0'],
    minlength: [1, 'Цена должна быть больше 1 символов'],
    maxlength: [30, 'Цена должна быть меньше 30 символов']
  },
  // шаг
  march: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: true,
  },
  // рысь
  trot: {
    type: Boolean,
    rrequired: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // галоп
  gallop: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  // конкур
  jump: {
    type: Boolean,
    required: [true, 'это поле обязательно для заполнения'],
    default: false,
  },
  comments: { String }
})

module.exports = model('event', eventSchema)
