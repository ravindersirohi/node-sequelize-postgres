const express = require('express');
const app = express();

//Routes


//Default
app.use('/', (req, resp) => {
    resp.status(200).send('Node Express API using Sequelize with Postgres SQL!');
});

module.exports = app;