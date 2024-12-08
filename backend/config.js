require('dotenv').config();

//const DB_ADDRESS = 'mongodb://localhost:27017/perevalDB';

const { PORT = 3000 } = process.env;
const { NODE_ENV, JWT_SECRET, DB_ADDRESS } = process.env;
const SALT_ROUNDS = 10;
const jwtSecretCheck = () => {

  const sw = 'sw123456789';

  if (!NODE_ENV) {
    return sw;
  }

  return NODE_ENV === 'production' ? JWT_SECRET : sw;
};

const dbCheck = () => {
  // можно ли заменить на ?
  const db = 'mongodb://localhost:27017/perevalDB';
  if (!NODE_ENV) {
    return db;
  }

  return NODE_ENV === 'production' ? DB_ADDRESS : db;
};

module.exports = {

  PORT,
  dbCheck,
  jwtSecretCheck,
  SALT_ROUNDS
};
