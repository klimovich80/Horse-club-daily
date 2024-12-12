const mongoose = require('mongoose');
const supertest = require('supertest');
const stapleSchema = require('../models/staple');
const fixtures = require('../fixtures/staples');
const endpoint = 'staples';
const request = supertest(`http://localhost:3000/${endpoint}`);
const DB_ADDRESS = 'mongodb://localhost:27017/perevalDB'
// сначала, перед тестами
beforeAll(() => {
  // Подключаемся к базе данных
  return mongoose.connect(DB_ADDRESS, {});
});
// после проведения тестов
afterAll(() => {
  // Отменяем подключение к БД
  return mongoose.disconnect();
});
// наборы тестов
describe('Тест Базы данных', () => {
  // Перед каждым тестом добавляем нужные данные в БД
  beforeEach(() => {
    // Берем их из подготовленного файла
    const staple = fixtures.staple;
    // создаем тестовую конюшню
    return stapleSchema.create(staple);
  });

  // После каждого теста
  afterEach(() => {
    // удаляем тестовую запись из БД
    return stapleSchema.deleteOne({
      // присваиваем значения поля имени из соответсующего поля тестовых записей
      name: fixtures.staple.name
    });
  });

  //тестируем связь с сервером, проверяем что он работает
  it('должен вернуться 200', () => {
    return request.get('/')
      .then((response) => {
        expect(response.status).toBe(200)
      })
  });
  // проверяем что запись есть
  it('запись должна существовать', () => {
    //находим ее в существующей записи по значению поля имени
    return stapleSchema.findOne({
      name: fixtures.staple.name
    }).then((staple) => {
      //ожидаем, что поле существует
      expect(staple).toBeDefined();
      expect(staple.name).toBe(fixtures.staple.name);
      expect(staple.name).type('string');
    }).catch((err) => {
      //если ошибка, выводим ее в консоль
      console.log("err", err)
    })
  });
});