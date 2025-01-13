const {Router} = require("express")
const ProductModel = require("../Model/ProductSchema")

const ProductRouter=Router()


ProductRouter.post("/addproduct", async(req,res)=>{
    try {
        const data =await ProductModel.create(req.body)
        res.status(200).send({msg:"product added sucessfully",data})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
})

module.exports=ProductRouter