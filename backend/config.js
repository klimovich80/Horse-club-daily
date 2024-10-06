const DB_ADDRESS = 'mongodb://localhost:27017/perevalDB';

const { PORT = 3000 } = process.env;

module.exports = {
    DB_ADDRESS,
    PORT,
};
