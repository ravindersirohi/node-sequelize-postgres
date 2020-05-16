const Sequelize = require('sequelize');
const db = require('../config/db');

const author = db.define('Author', {
    id: {
        field: 'authorId',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = author;
