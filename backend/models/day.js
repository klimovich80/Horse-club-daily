const { Schema, model } = require('mongoose');

const daySchema = new Schema({
  name: {
    type: String,
    required: [true, 'это поле обязательно для заполнения'],
    minLength: [2, 'Поле должно содержать больше 2 символов, Вы ввели: {VALUE}'],
    maxLength: [30, 'Поле должно содержать меньше 30 символов, Вы ввели: {VALUE}'],
  },
  dayOff: {
    type: Boolean,
    default: false
  },
  startTime: {
    type: Number,
    default: 8
  },
  endTime: {
    type: Number,
    default: 17
  },
}, { timestamps: true });


module.exports = model('day', daySchema);