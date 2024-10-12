const { Schema, model } = require('mongoose');
//модель создана для описания типов событий типа "прогулка"/"занятие"/"поход"
const eventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 20 символов, Вы ввели: {VALUE}'],
  },
  comments: { String }
})

module.exports = model('event', eventSchema)