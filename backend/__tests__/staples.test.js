const mongoose = require('mongoose');
const supertest = require('supertest');
const stapleSchema = require('../models/staple');
const fixtures = require('./fixtures/staples');
// const endpoint = 'staples';
// const request = supertest(`http://localhost:3000/${endpoint}`);
const DB_ADDRESS = 'mongodb://localhost:27017/perevalDB'

/* describe('Эндпоинты откликаются на запросы', () => {
  it('Возвращает данные и 200-й ответ по запросу к "/"', () => {
    return request.get('/').then((response) => {
      expect(response.status).toBe(200);
    });
  });
}); */

beforeAll(() => {
  // Подключаемся к базе данных
  return mongoose.connect(DB_ADDRESS, {});
});

afterAll(() => {
  // Отменяем подключение к БД
  return mongoose.disconnect();
});

describe('Тест Базы данных', () => {

  beforeEach(() => {
    // Перед каждым тестом добавляем нужные данные в БД
    // Берем их из подготовленного файла
    const staple = fixtures.staple;
    console.log('data', staple);

    // создаем тестовую конюшню
    return stapleSchema.create(staple);
  });

  afterEach(() => {
    // После каждого теста убираем данные из БД
    return stapleSchema.deleteOne({
      name: fixtures.staple.name
    });
  });

  it('should do the test work...', () => {
    expect(true).toBe(true);
  });
});