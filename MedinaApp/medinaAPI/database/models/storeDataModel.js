const {DataTypes} = require('sequelize')
const sequelize = require("../sequelizeConfig")

const StoreData = sequelize.define('StoreData ',{
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    min_quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max_quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = StoreData;