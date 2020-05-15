const Sequelize = require('sequelize');
const db = require('../config/db');

const articles = db.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})
module.exports = { articles };
