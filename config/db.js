const Sequelize = require('sequelize');
const keys = require('../config/keys');
const db = new Sequelize(keys.database, keys.user, keys.password, {
    host: keys.host,
    dialect: keys.dialect
});

module.exports = db;
