const express = require('express');
const app = express();
const connection = require('./database/connection');
const crud = require('./routes/crud');

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use(crud);

app.listen(8080, (req, res) => {
    console.log('The server is running');
})