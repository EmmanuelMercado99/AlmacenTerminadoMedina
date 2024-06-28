const {DataTypes} = require('sequelize')
const sequelize = require("../sequelizeConfig")

const User = sequelize.define('User',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = User;