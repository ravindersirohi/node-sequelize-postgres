const express = require('express');
const routes = express.Router();
const Article = require('../models/Article');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

routes.get('/', (request, response) => {
    let filter = {};
    const q = request.query.q;
    if (q) {
        filter = {
            where: {
                title: {
                    [Op.like]: `%${q}%`
                }
            }
        }
    }
    Article.findAll(filter)
        .then((articles) => { return response.status(200).json(articles) })
        .catch(err => { return response.status(404).send(err) });
});

routes.post('/', (request, response) => {
    const { title, body, authorId } = request.body;
    Article.create({ title, body, authorId })
        .then(article => { return response.status(201).json(article) })
        .catch(err => { return response.status(400).send(err) });
});

routes.put('/', (request, response) => {
    const { id, title, body, email } = request.body;
    Article.update({ title, body }, {
        where: {
            id: id
        }
    })
        .then(article => { return response.status(202).send('Article successfully updated!') })
        .catch(err => { return response.status(404).send(err) });
});

routes.delete('/:id', (request, response) => {
    const { id } = request.params;
    Article.findByPk(id)
        .then(article => {
            console.log(article);
            if (article)
                return article.destroy();
            else
                return Promise.reject();
        })
        .then(() => response.status(204).send())
        .catch(err => response.status(404).send(err));
});

module.exports = routes;