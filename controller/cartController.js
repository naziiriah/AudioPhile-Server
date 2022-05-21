
const asyncHandler = require('express-async-handler')
const Cart = require('../models/cartModels')
const user = require('../models/userModels')

const getCart = asyncHandler(async(req, res) => {
    const cart = await Cart.find({
        user: req.user.id
    })

    res.status(200).json(cart)
})

const addItem = asyncHandler (async(req, res) => {


    const { name, amount, price }= req.body

    
    if(!name && !amount && !price){
        

        res.status(400)
        throw new Error('Please input field correctly')
        
    }
            const Item = await Cart.create({
                name:name,
                amount:amount,
                price:price,
                user: req.user.id,
            })

            res.status(200).json(Item)    
})

const editItem =  asyncHandler (async (req, res) => {
    const cart = await Cart.findById(req.params.id)

    if(!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    const User =await user.findById(req.user.id)

    if(!User){
        res.status(401)
        throw new Errror ('user not found')
    }

    // 
    if(cart.user.toString() !== User.id){
        res.status(401)
        throw new Error('user not authorised')
    }
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    })

    res.status(200).json(updatedCart)

})
const removeItem = asyncHandler(async (req, res) => {
      const cart = await Cart.findById(req.params.id)

    if(!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    const User =await user.findById(req.user.id)

    if(!User){
        res.status(401)
        throw new Errror ('user not found')
    }

    // 
    if(cart.user.toString() !== User.id){
        res.status(401)
        throw new Error('user not authorised')
    }

    await cart.remove()

    res.status(200).json({ id: req.params.id })
})

const EmptyCart = asyncHandler(async (req, res) => {
    cart.splice(0,cart.length);
    res.status(200).json(cart)
})





module.exports = {
    getCart,
    editItem,
    addItem,
    removeItem,
    EmptyCart
}