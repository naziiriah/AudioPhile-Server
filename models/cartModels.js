const mongooose = require('mongoose')
const number = require('mongoose/lib/cast/number')

const feedBackSchema = mongooose.Schema(
    {
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

module.exports = mongooose.model('Feedback',feedBackSchema)