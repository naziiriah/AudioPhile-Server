const mongooose = require('mongoose')


const cartSchema = mongooose.Schema(
    {
        user:{
            type:mongooose.Schema.Types.ObjectId,
            required:true,
            ref: "User"
        },
        name:{
            type:String,
            required:[true, "Please add a text value"]
        },
        amount:{
            type:Number,
            required:[true, "Please add a text value"]
        },
        price:{
            type:Number,
            required:[true, "Please add a text value"]
        },
    },
    {
        timestamps:true,
    }
)

module.exports = mongooose.model('Cart',cartSchema)