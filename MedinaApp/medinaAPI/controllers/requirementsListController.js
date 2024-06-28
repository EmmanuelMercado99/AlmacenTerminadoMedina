const { where } = require("sequelize");
const requirements = require("../database/models/requirementList")

exports.addRequirement = async(req,res) =>{
    console.log("Add Requirement");
    try{
        const{model,description,quantity,unity} = req.body
        const upperCaseDescription = description.toUpperCase()
        const requirementExists = await requirements.findAll({
            where:{
                model: model,
                description: upperCaseDescription
            }
        })
        console.log(requirementExists);
        if (requirementExists.length == 0){
            const requirementData = await requirements.create({model,description:upperCaseDescription,quantity,unity})
            res.status(200).json({data: requirementData,status: "Ok",message:'Data create'})

        }
        else{
            res.status(200).json({data: [],status: "Already Exists",message:'Data create'})
        }
    }
    catch(error)
    {
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}

exports.getListByModel = async(req,res) =>{
    console.log("Get list requirements");
    try{
        const {model} = req.params
        console.log(model);
        const list = await requirements.findAll({
            where:{
                model : model
            }
        })
        res.status(200).json({data: list,status: "Ok",message:'Data founded'})
    }
    catch(error)
    {
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}

exports.getModels = async (req,res) =>{
    console.log("Get models");
    try{
        const list = await requirements.findAll()
        const uniqueModels = getUniqueModels(list)
        res.status(200).json({data: uniqueModels,status: "Ok",message:'Data founded'})
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}


exports.updateReqList= async(req, res) => {
    console.log("Update req list");
    try{
        const {id,model,description,quantity,unity} = req.body
        console.log(req.body);
        const updateReqData = await requirements.update(
            {model,description,quantity,unity},
            {
                where: {
                    id: id
                }
            }
        )
        console.log(updateReqData);
        res.status(200).json({data: updateReqData, status: "Ok",message:'Data updated'})
    }
    catch(error)
    {
        res.status(500).json({data: error, status:"Error",message:'Store Data not updated'})
    }
}

exports.eraseStoreData = async (req,res) =>{
    const {id} = req.params
    console.log("Erase store data");

    try{
        await requirements.destroy(
            {
                where:{
                    id: id
                }
            }
        )
        res.status(200).json({data: [], status: "Ok",message:'Store Data erased'})
    }
    catch(error){
        res.status(500).json({data: error, status:"Error",message:'Store Data not erased'})
    }
}









function getUniqueModels(data) {
    const models = new Set()
    data.forEach(item => {
        models.add(item.model)
    })
    return Array.from(models)
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

