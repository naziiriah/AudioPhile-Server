const mongooose = require('mongoose')


const userSchema = mongooose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please add a text value"]
        },
        email:{
            type:String,
            required:[true, "Please add provide an email"],
            unique:true,
        },
        password:{
            type:String,
            required:[true, "Please provide password"]
        },
    },
    {
        timestamps:true,
    }
)

module.exports = mongooose.model('Feedback',userSchema)