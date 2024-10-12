const router = require('express').Router();
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');
// подключаем маршруты для польователей
const userRouter = require('./users');
// подключаем маршруты для клиентов
const clientRouter = require('./clients');
//подключаем маршруты для лошадей
const horseRouter = require('./horses');
// подключаем маршруты для записей
const recordRouter = require('./records');
// подключаем маршруты для конюшен
const stapleRouter = require('./staples');
// используем маршруты
// пользователи
router.use('/users', userRouter);
// клиенты
router.use('/clients', clientRouter);
// лошади
router.use('/horses', horseRouter);
// записи
router.use('/records', recordRouter);
// конюшен
router.use('/staples', stapleRouter);
// документ не найден
router.use(() => {
  throw new DocumentNotFoundError('Страница по указанному адресу не найдена(')
});
//экспортируем маршруты
module.exports = router;
