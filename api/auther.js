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
    const { firstName, lastName, email } = request.body;
    Author.create({ firstName, lastName, email })
        .then(author => { return response.status(201).json(author) })
        .catch(err => { return response.status(400).send(err) });
});
routes.put('/', (request, response) => {
    const { id, firstName, lastName, email } = request.body;
    Author.update({ firstName, lastName, email }, {
        where: {
            id: id
        }
    })
        .then(author => { return response.status(202).send('Successfully updated!') })
        .catch(err => { return response.status(400).send(err) });
});

routes.delete('/:id', (request, response) => {
    const { id } = request.params;
    Author.findByPk(id)
        .then(author => {
            if (author)
                return author.destroy();
            else
                return Promise.reject();
        })
        .then(() => response.status(204).send())
        .catch(err => response.status(404).send(err));
});

module.exports = routes;