const express = require('express');
const app = express();
const db = require('./config/db');
const author = require('./api/auther');
const article = require('./api/article');
require('./models/relationship');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Routes
app.use('/api/author', author);
app.use('/api/article', article);


// Database Sync
db.authenticate()
    .then(() => {
        console.log('Database connected!')
        db.sync()
            .then(() => console.log('DB Synced!'))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

//Default
app.use('/', (req, resp) => {
    resp.status(200).send('Node Express API using Sequelize with Postgres SQL!');
});

module.exports = app;