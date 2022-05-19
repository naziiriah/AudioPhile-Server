
const asyncHandler = require('express-async-handler')
const Cart = require('../models/cartModels')

const getCart = asyncHandler(async(req, res) => {
    const cart = await Cart.find()

    res.status(200).json(cart)
})

const addItem = asyncHandler (async(req, res) => {
    const cart =await Cart.find()

    const { name, amount, price }= req.body

    
    if(!name && !amount && !price){
        

        res.status(400)
        throw new Error('Please input field correctly')
        
    }
            const Item = await Cart.create({
                name:name,
                amount:amount,
                price:price
            })

            res.status(200).json(Item)
        

   

    
})

const editItem =  asyncHandler (async (req, res) => {

})

const removeItem = asyncHandler(async (req, res) => {

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