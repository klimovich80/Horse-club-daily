const express = require('express');

const mongoose = require('mongoose');

const { PORT, DB_ADDRESS } = require('./config');

mongoose.connect(DB_ADDRESS);

const router = require('./routes');

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
