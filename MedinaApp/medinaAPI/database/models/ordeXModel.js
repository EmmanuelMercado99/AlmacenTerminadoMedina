const { DataTypes } = require('sequelize')
const sequelize = require("../sequelizeConfig")

const OrderModel = sequelize.define('OrderModel', {
    order: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = OrderModel;