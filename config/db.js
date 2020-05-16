const Sequelize = require('sequelize');
const keys = require('../config/keys');
module.exports = new Sequelize(keys.database, keys.user, keys.password, {
    host: keys.host,
    dialect: keys.dialect
});