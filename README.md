# Node Sequelize and Postgres API
NodeJS API using ExpressJS, Sequelize (V5) ORM and Postgres database

# Sequelize (V5) ORM

https://sequelize.org/ <br/>
https://sequelize.org/v5/


# API and endpoints

1) API has two Author and Article controllers.
2) Author and Article both resources has HTTP GET/POST/PUT/DELETE endpoints to perform CRUD operations.

# Portgres database

1) DbAuthor database has two entities Author and Article
2) Article has a relationship with Author entity.

# Author Schema

authorId: number (PK)
firstName : string
lastName : string
email: string

# Article Schema
articleId: number (PK)
title : string
body : string
authorId: number (FK)

