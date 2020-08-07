const express = require('express');
const app = express();
const connection = require('./database/connection');
const crud = require('./routes/crud');
const path = require('path');
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;
    next();
})

// Root route 
app.get('/', (req, res) => {
    res.send('Hello world');
})



app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// Using routes
app.use(crud);

app.use(cors());


//Server on
server.listen(8080, (req, res) => {
    console.log('The server is running');
})