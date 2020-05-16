const Sequelize = require('sequelize');
const db = require('../config/db');

const article = db.define('Article', {
    id: {
        field: 'articleId',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = article;

