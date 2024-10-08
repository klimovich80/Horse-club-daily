const router = require('express').Router();
const DocumentNotFoundError = require('../errors/DocumentNotFoundError');
// подключаем маршруты для клиентов
const clientRouter = require('./clients');
//подключаем маршруты для лошадей
const horseRouter = require('./horses');
// используем маршруты
//клиенты
router.use('/clients', clientRouter);
//лошади
router.use('/horses', horseRouter);
// документ не найден
router.use(() => {
  throw new DocumentNotFoundError('Страница по указанному адресу не найдена(')
});
//экспортируем маршруты
module.exports = router;
