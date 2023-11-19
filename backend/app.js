const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/perevalDB');

const router = require('./routes');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
