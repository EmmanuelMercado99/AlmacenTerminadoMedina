const { Op } = require('sequelize')

const storeData = require("../database/models/storeDataModel")



exports.createStoreData = async (req, res) => {
    console.log("Create store data");
    try {
        const { description, quantity, min_quantity, max_quantity, type } = req.body
        const upperCaseDescription = description.toUpperCase()
        const storeDataCreated = await storeData.create({ description: upperCaseDescription, quantity, min_quantity, max_quantity, type })

        res.status(200).json({ data: storeDataCreated, status: "Ok", message: 'Data create' })
    }
    catch (error) {
        res.status(500).json({ data: error, status: "Error", message: "Error" })
    }
}

exports.findAllDataStore = async (req, res) => {
    console.log("Find all data");
    try {
        const allStoreData = await storeData.findAll()
        console.log(allStoreData);
        res.status(200).json({ data: allStoreData, status: "Ok", message: 'Store Data founded' })

    }
    catch (error) {
        res.status(500).json({ data: error, status: "Error", message: 'Store Data not founded' })
    }
}


exports.findByDescription = async (req, res) => {
    const { description } = req.body
    console.log(req.body);
    console.log("Find data by description");
    try {
        const storeDataByDescription = await storeData.findAll({
            where: {
                description: {
                    [Op.like]: `%${description}%`
                }
            }
        })

        res.status(200).json({ data: storeDataByDescription, status: "Ok", message: 'Store Data founded' })

    }
    catch (error) {
        res.status(500).json({ data: error, status: "Error", message: 'Store Data not founded' })
    }
}

exports.updateStoreData = async (req, res) => {
    const { id, description, quantity, min_quantity, max_quantity, type } = req.body
    console.log("Update store data");
    const upperCaseDescription = description.toUpperCase()
    try {
        const storeDataByPk = await storeData.update(
            { description: upperCaseDescription, quantity, min_quantity, max_quantity, type },
            {
                where: {
                    id: id
                }
            }

        )
        res.status(200).json({ data: storeDataByPk, status: "Ok", message: 'Store Data founded' })
    }
    catch (error) {
        res.status(500).json({ data: error, status: "Error", message: 'Store Data not updated' })
    }

}

exports.eraseStoreData = async (req, res) => {
    const { id } = req.params
    console.log("Erase store data");
    console.log({ id });

    try {
        await storeData.destroy(
            {
                where: {
                    id: id
                }
            }
        )
        res.status(200).json({ data: [], status: "Ok", message: 'Store Data erased' })
    }
    catch (error) {
        res.status(500).json({ data: error, status: "Error", message: 'Store Data not erased' })
    }
}


exports.findQuantityByDescription = async (req, res) => {
    console.log("Find Quantity by Description");
    const { data } = req.body
    console.log(data);
    let arrayDataStore = []

    for (i = 0; i < data.length; i++) {
        try {
            let dataStore = await storeData.findAll({
                attributes: ["description", "quantity", "max_quantity", "min_quantity", "type"]
                ,
                where: {
                    description: data[i].toUpperCase()
                }
            })
            arrayDataStore.push(dataStore)
        }
        catch (error) {
            console.log(error);
        }
    }
    res.status(200).json({ data: arrayDataStore, status: "Ok", message: 'Store Data erased' })



}




