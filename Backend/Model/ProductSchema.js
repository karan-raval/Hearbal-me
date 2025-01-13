const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
   image :{type:String},
    price : {type : String},
    title : {type:String},
    discountprice: {type:String}
})

const ProductModel = mongoose.model("Products", ProductSchema);

module.exports = ProductModel