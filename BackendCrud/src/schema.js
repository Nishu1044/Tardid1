const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true 
    }
})

const productModel = mongoose.model("productData",productSchema)
module.exports = productModel