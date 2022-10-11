const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/contactRoute');
const app = express();

app.use(logger('dev'));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contactDB');
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to DB');
    }
    else {
        console.log(err);
    }
});

app.use('/api/v1', routes);

app.listen(8000, () => {
    console.log('Server running on port 8000');
});