const {DataTypes} = require('sequelize')
const sequelize = require("../sequelizeConfig")

const OutHistoryData = sequelize.define('OutHistoryData ',{
    hasOrder:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    order:{
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    petitioner:{
        type: DataTypes.STRING,
        allowNull: false
    },
    deliverer:{
        type: DataTypes.STRING,
        allowNull: false
    },
    justification:{
        type: DataTypes.STRING,
    }
    

})


module.exports = OutHistoryData;