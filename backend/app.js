const express = require('express');

const { connect } = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const { PORT, dbCheck } = require('./config');
const router = require('./routes');
//const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/limiter');
const app = express();
//проверка на соединение
connect(dbCheck())
  .then(() => {
    console.log(`подключились к базе данных : ${dbCheck()}\n`)
  })
  .catch((err) => {
    console.log(`Ошибка подключения к базе данных : `, err.message);
  });

app.use(helmet()); //подключаем helmet
app.use(limiter); //подключаем limiter ограничеия количества запросов
app.use(cors()); //подключаем cors для обеспечения безопасности
app.use(express.json());
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());

app.listen(PORT, () => {
  console.log(`сервер слушает порт ${PORT}`);
});

module.exports = app;
