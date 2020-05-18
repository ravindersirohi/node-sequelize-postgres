const Author = require('./Author');
const Article = require('./Article');

//Relationship
Article.belongsTo(Author, {
    foreignKey: 'authorId'
});

module.exports = { Author, Article }