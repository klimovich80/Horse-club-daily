const router = require('express').Router();
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');
// подключаем маршруты для польователей
const userRouter = require('./users');
// подключаем маршруты для событий
const eventRouter = require('./events');
// подключаем маршруты для клиентов
const clientRouter = require('./clients');
//подключаем маршруты для лошадей
const horseRouter = require('./horses');
// подключаем маршруты для записей
const recordRouter = require('./records');
// подключаем маршруты для конюшен
const stapleRouter = require('./staples');
// подключаем маршруты для инструкторов
const instructorRouter = require('./instructors');
// подключаем маршруты для маршрутов
const trailRouter = require('./trails');
// подключаем маршруты для источников лида
const leadSourceRouter = require('./lead-sources');

// используем маршруты
// пользователи
router.use('/users', userRouter);
// события
router.use('/events', eventRouter);
// клиенты
router.use('/clients', clientRouter);
// лошади
router.use('/horses', horseRouter);
// записи
router.use('/records', recordRouter);
// конюшен
router.use('/staples', stapleRouter);
// инструкторы
router.use('/instructors', instructorRouter);
// маршруты
router.use('/trails', trailRouter);
// источники лида
router.use('/lead-sources', leadSourceRouter);

// документ не найден
router.use(() => {
  throw new DocumentNotFoundError('Страница по указанному адресу не найдена(')
});
//экспортируем маршруты
module.exports = router;
