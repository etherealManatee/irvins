const router = require('express').Router()
const Product = require('../models/product.model')

//adding new product
router.post("/products", async (req, res) => {
    try {
        console.log("h", req.body)
        let product = new Product(req.body)
        await product.save().catch(err => console.log(err))

        res.status(201).json({})
    } catch (e) {
        res.status(400).json({"message":"error creating product"})
    }
})

//view one product
router.get("/products/:id", async (req,res) => {
    try{
        let product = await ProductModel
    } catch (e) {

    }
})

module.exports = router