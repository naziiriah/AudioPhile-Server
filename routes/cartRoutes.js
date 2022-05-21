const express = require('express')
const Router = express.Router()
const {
getCart,
addItem,
editItem,
EmptyCart,
removeItem
} = require('../controller/cartController')
const {protect} = require('../middleware/authMiddleware')

Router.route('/').get(protect,getCart).post(protect,addItem).delete(EmptyCart)

Router.route('/:id').delete(protect,removeItem).put(protect,editItem)

module.exports = Router

