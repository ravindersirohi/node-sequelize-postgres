const Author = require('./Author');
const Article = require('./Article');

//Relationship
Author.hasMany(Article, {
    foreignKey: 'articleId'
});
Article.belongsTo(Author, {
    foreignKey: 'authorId'
});

module.exports = { Author, Article }