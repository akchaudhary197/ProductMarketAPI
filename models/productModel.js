const mongoose = require("mongoose");

const procuctSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: false
        },
        price:{
            type:Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Product',procuctSchema)