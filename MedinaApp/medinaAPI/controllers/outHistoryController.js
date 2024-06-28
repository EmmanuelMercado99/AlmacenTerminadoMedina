
const outHistory = require("../database/models/outHistoryModel")

exports.createOutHistoryData = async (req,res) =>{
    console.log("Create Out History");
    console.log(req.body);
    try{
        const {hasOrder,order,description,quantity,petitioner,deliverer,justification} = req.body
        const upperCaseDescription = description.toUpperCase()
        const storeDataCreated = await outHistory.create({hasOrder,order,description:upperCaseDescription,quantity,petitioner,deliverer,justification})
        
        res.status(200).json({data: storeDataCreated,status: "Ok",message:'Data create'})
    }
    catch(error){
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}

exports.getOutHistory = async (req,res) =>{
    const {criterio} = req.params
    console.log("Get Out History");
    console.log(`Criterio de búsqueda: ${criterio}`);

    try{
        if(criterio=="order"){
            const {order} = req.body
            const storeDataCreated = await outHistory.findAll({
                where:{
                    order : order
                }
            })
            
            res.status(200).json({data: storeDataCreated,status: "Ok",message:'Data founded'})
        }
        else if (criterio=="description"){
            const {description} = req.body
            const upperCaseDescription = description.toUpperCase()
            const storeDataCreated = await outHistory.findAll({
                where:{
                    description : upperCaseDescription
                }
            })
            
            res.status(200).json({data: storeDataCreated,status: "Ok",message:'Data founded'})
        }
        else{
            res.status(500).json({data: [],status: "Ok",message:'Critery bad'})
        }
       
    }
    catch(error){
        res.status(500).json({data:error,status:"Error",message:"Error"})
    }
}