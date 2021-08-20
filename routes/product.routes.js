const router = require('express').Router()
const ProductModel = require('../models/product.model')

//adding new product
router.post("/products", async (req, res) => {
    try {
        // console.log("h", req.body)
        let product = new ProductModel(req.body)
        await product.save().catch(err => console.log(err))

        res.status(201).json({data: product})
    } catch (e) {
        res.status(400).json({"message":"error creating product"})
    }
})

//view one product
router.get("/products/:id", async (req,res) => {
    try{
        let product = await ProductModel.findById(req.params.id)

        res.status(200).json({data: product})
    } catch (e) {
        res.status(400).json({"message":"error in request"})
    }
})

//edit one product
router.put("/products/:id", async (req,res) => {
    try{
        let product = await ProductModel.findByIdAndUpdate(req.params.id, req.body)

        let updatedProduct = await ProductModel.findById(req.params.id)

        res.status(200).json({data: updatedProduct})
    } catch (e) {
        res.status(400).json({"message":"error in request"})
    }
})

//delete on product
router.delete("/products/:id", async (req,res) => {
    try{
        let product = await ProductModel.findByIdAndDelete(req.params.id)

        res.status(200).json({data: [{id: product._id}]})
    } catch (e) {
        res.status(400).json({"message":"error in request"})
    }
})



module.exports = router