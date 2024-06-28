const {DataTypes} = require('sequelize')
const sequelize = require("../sequelizeConfig")

const ModelMP = sequelize.define('ModelMP',{
    models:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = ModelMP;