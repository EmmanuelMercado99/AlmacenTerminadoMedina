const {DataTypes} = require('sequelize')
const sequelize = require("../sequelizeConfig")

const RequirementsList = sequelize.define('RequirementsList',{
    model:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unity:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = RequirementsList;