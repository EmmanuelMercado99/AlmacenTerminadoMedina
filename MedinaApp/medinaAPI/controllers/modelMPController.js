const modelsMP = require("../database/models/modelMPModel");
const { all } = require("../routes/modelMPRoutes");


exports.addModelMP = async(req, res) =>{
    console.log("Add model of motor or pump");
    try{
        const{models,type} = req.body
        const upperCaseModel = models.toUpperCase()
        const addModelData = await modelsMP.create({models:upperCaseModel,type})
        res.status(200).json({data: addModelData,status: "Ok",message:'Data create'})
    }
    catch(error){
        console.log(error);
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}

exports.getAllModelsMP = async(req,res) => {
    console.log("Get all models");
    try{
        const allDataModels = await modelsMP.findAll({
            attributes:["id","models","type"]
        })
        res.status(200).json({data: allDataModels,status: "Ok",message:'Data founded'})
    }
    catch{
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}