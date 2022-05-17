const cart = require('../Cart')

const getCart = (req, res) => {
    res.status(200).json(cart)
    
}

const addItem = (req, res) => {
    const name = req.body.name
    const amount = req.body.amount
    const price = req.body.price

    
    if(name && amount && price){
        
        if( cart.length === 0){
            cart.push({            
                name,
                amount,
                price,                       
            })
        }else{
            const existingCart =  cart.filter((Name) => Name === name )

            if(existingCart){
               res.status(200).json({
                   message: "contined"
               })
            } else {
                cart.push({            
                    name,
                    amount,
                    price,                       
                })  
            }
        }


    } else{
        res.status(404)
        throw new Error('Input item correctly!!')
    }

    res.status(200).json(cart)
}

const editItem = (req, res) => {

}

const removeItem = (req, res) => {

}

const EmptyCart = (req, res) => {
    cart.splice(0,cart.length);
    res.status(200).json(cart)
}





module.exports = {
    getCart,
    editItem,
    addItem,
    removeItem,
    EmptyCart
}