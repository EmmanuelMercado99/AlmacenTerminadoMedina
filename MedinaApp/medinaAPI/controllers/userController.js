const User = require("../database/models/userModel")
const md5 = require("md5")

exports.createUser = async (req,res) =>{
    console.log("Create user");
    try{
        const {name,user,password,position} = req.body
        const hashPassword = md5(password)
        const userCreated = await User.create({name,user,password:hashPassword,position})
        
        res.status(200).json({data: userCreated, message:'Usuario creado'})
    }
    catch(error){
        res.status(500).json({data:error,message:"Error"})
    }
}

exports.findUser = async (req,res) =>{
    console.log("Login user");
    try{
        const {user,password} = req.body
        const hashPassword = md5(password)
        const userFinded = await User.findAll({
            attributes:["name","user","position"],
            where:
            {
                user:user,
                password: hashPassword
             }
        })
        console.log(userFinded.length);
        if (userFinded.length>=1){
            res.status(200).json({data: userFinded, status: "Ok",message:'Usuario encontrado'})
            return;
        }
        res.status(200).json({data: [],status:"Not user", message:'Usuario no encontrado'})
        
        
    }
    catch(error){
        res.status(500).json({data: [], status:"Error",message:'Usuario no encontrado'})
    }
}