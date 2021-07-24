const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Posts extends Model {}
Posts.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    post: DataTypes.STRING,
    abstract: DataTypes.STRING,
    tweet: DataTypes.STRING,
    imagen: DataTypes.STRING,
    status: {type:DataTypes.BOOLEAN, defaultValue: true},

    text: DataTypes.TEXT('long')
    
}, {
    sequelize,
    modelName: "posts"
});

module.exports = Posts;