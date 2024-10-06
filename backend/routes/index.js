const router = require('express').Router();
// подключаем маршруты для клиентов
const clientRouter = require('./clients');
//подключаем маршруты для лошадей
const horseRouter = require('./horses');
// используем маршруты
//клиенты
router.use('/clients', clientRouter);
//лошади
router.use('/horses', horseRouter);
//экспортируем маршруты
module.exports = router;
