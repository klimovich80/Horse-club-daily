const mongoose = require('mongoose');

// схема клиента
const clientShema = new mongoose.Schema({
  //имя клиента
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  //фамилия клиента
  lastName: {
    type: String,
    required: false,
    minLength: 2,
    maxLength: 30,
    default: 'неизвестно',
  },
  //телефон клиента, если неизвестно, то +79781234567
  phone: {
    type: String,
    required: true,
    default: '+79781234567',
  },
  //источник клиента, если неизвестно, то неизвестно
  source: {
    type: String,
    default: 'неизвестно',
  },
  //возраст клиента
  age: {
    type: Number,
    required: false,
    minLength: 1,
    maxLength: 3,
    default: 0,
  },
  //дети клиента, если неизвестно, то false
  child: {
    type: Boolean,
    required: true,
    default: false,
  },
  // группа клиентов, если неизвестно, то false?
  group: {
    type: Boolean,
    required: true,
    default: false,
  },
  //фото клиента, если неизвестно, то 'http://vk.com'
  avatar: {
    type: String,
    default: 'http://vk.com',
  },
  //vk клиента, если неизвестно, 'http://vk.com'
  vk: {
    type: String,
    // unique: true,
    default: 'http://vk.com',
  },
  // социальная сеть клиента, если неизвестно, 'http://vk.com'
  social: {
    type: String,
    default: 'http://vk.com',
  },
  // продвинутый клиент, если неизвестно, false
  advanced: {
    type: Boolean,
    required: true,
    default: false,
  },
  // в первый разклиент, если неизвестно, false
  firstTime: {
    type: Boolean,
    required: true,
    default: true,
  },
  // умеет шагом? если неизвестно, false
  march: {
    type: Boolean,
    required: true,
    default: true,
  },
  // умееет рысью? если неизвестно, false
  trot: {
    type: Boolean,
    required: true,
    default: false,
  },
  // умеет галопом? если неизвестно, false
  gallop: {
    type: Boolean,
    required: true,
    default: false,
  },
  // умеет прыгать? если неизвестно, false
  jump: {
    type: Boolean,
    required: true,
    default: false,
  },
  // описание клиента
  about: {
    type: String,
    maxLength: 300,
  },
}, { timestamps: true });

module.exports = mongoose.model('client', clientShema);
