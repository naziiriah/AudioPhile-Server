const express = require('express')
const Router = express.Router()
const {
getCart,
addItem,
editItem,
EmptyCart,
removeItem
} = require('../controller/cartController')

Router.route('/').get(getCart).post(addItem).delete(EmptyCart)

Router.route('/:id').delete(removeItem).put(editItem)

module.exports = Router

