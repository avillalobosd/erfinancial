const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Users extends Model {}
Users.init({
    usuario: DataTypes.STRING,
    password: DataTypes.STRING,
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING
    // text: DataTypes.TEXT('long')
    
}, {
    sequelize,
    modelName: "users"
});

module.exports = Users;