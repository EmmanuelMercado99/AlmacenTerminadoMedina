
const orderXModel = require("../database/models/ordeXModel");


exports.addOrderModel = async (req, res) => {
    console.log("Asign model to order");
    try {
        const { model, order } = req.body
        const modelUpperCase = model.toUpperCase()
        const orderUpperCase = order.toUpperCase()
        const addData = await orderXModel.create({ model: modelUpperCase, order: orderUpperCase })
        res.status(200).json({ data: addData, status: "Ok", message: 'Data create' })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ data: error, status: "Error", message: "Error" })
    }
}

exports.getModelByOrder = async (req, res) => {
    console.log("Get Model by Order");
    try {
        const { order } = req.params
        console.log(order);
        const data = await orderXModel.findAll({
            where: {
                order: order
            }
        })
        res.status(200).json({ data: data, status: "Ok", message: 'Data founded' })
    }
    catch {
        res.status(500).json({ data: error, status: "Error", message: "Error" })
    }
}

