const express = require('express');
const routes = express.Router();
const Author = require('../models/Author');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

routes.get('/', (request, response) => {
    let filter = {};
    const q = request.query.q;
    if (q) {
        filter = {
            where: {
                firstName: {
                    [Op.like]: `${q}`
                }
            }
        }
    }
    Author.findAll(filter)
        .then((authors) => { return response.status(200).json(authors) })
        .catch(err => { return response.status(404).send(err) });
});
routes.post('/', (request, response) => {
    console.log(request.body);
    const { firstName, lastName, email } = request.body;
    Author.create({
        firstName,
        lastName,
        email
    })
        .then(author => { return response.status(201).json(author) })
        .catch(err => { return response.status(400).send(err) });
});
routes.put('/', (request, response) => {
    console.log(request.body);
    const { id, firstName, lastName, email } = request.body;
    Author.update({ firstName, lastName, email }, {
        where: {
            id: id
        }
    })
        .then(author => { return response.status(202).send('Successfully updated') })
        .catch(err => { return response.status(400).send(err) });
});

module.exports = routes;