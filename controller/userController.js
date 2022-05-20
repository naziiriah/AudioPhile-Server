const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

const createUser = asyncHandler( async(req, res) => {
    const { name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill in the correct information!")
    }

    const userExists = await User.findOne({email})

    if (userExists){

        res.status(400)
        throw new Error("User exists!!!")
    }

    const salt  = await bcrypt.genSalt(10)
    const hashesPassword =  await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name,
        email,
        password:hashesPassword,
    })

    if(newUser){
        res.status(201)
        .json({
            _id:newUser.id,
            name: newUser.name,
            email:newUser.email,
            token: generateToken(newUser.id)
        })
    }else {
        res.status(400)
        throw new Error('invalid user data')
    }

})

const authenticateUser = asyncHandler( async(req, res) => {
    const { email, password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Please fill in the correct information!")
    }

    const userExists = await User.findOne({email})

    if (userExists && await(bcrypt.compare(password, userExists.password))){

        res.status(200).json({
                _id:userExists.id,
                name: userExists.name,
                email:userExists.email,
                token: generateToken(userExists.id)
                })
        
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

const userProfile = asyncHandler( async(req, res) => {

    res.status(200).json({
        message:true
    })

})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET , {
        expiresIn: '30d',
    })
}


module.exports = {
    createUser,
    authenticateUser,
    userProfile
}