const User = require("../models/userModel")

exports.signUp = async(req, res, next)=>{
    // return res.status(200).send({message:"hitting singup route"})
    try{
        const newUser = await createUserObj(req)
        const savedUser = await User.create(newUser)
        return res.status(200).send({message:"user created succcessfully"}
    )
    }
    catch(error){
        return res.status(400).send({message:"Not created"})
    }
}

exports.logIn =async(req, res)=>{
    return res.status(200).send({message:"hitting login route"})
}

exports.updateUser =async(req, res)=>{
    return res.status(200).send({message:"hitting update route"})
}

exports.deleteUser =async(req, res)=>{
    return res.status(200).send({message:"hitting delete route"})
}

exports.data =async(req, res)=>{
    return res.status(200).send({message:"hitting data route"})
}

const createUserObj = async(req)=>{
    return{
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.emai,
        password: req.body.password,
        phone: req.body.phone
    }
}