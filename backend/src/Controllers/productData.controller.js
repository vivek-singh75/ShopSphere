const productModel = require("../Schemas/productModel")

async function productdata(req , res) {

    try {

        const limit = Number(req.query.limit) || 10

        const productData = await productModel.find().limit(limit)

        console.log("product data fetched successfully")

        res.status(200).json({
            message : `${limit} product fetched` ,
            productData
        })

    } catch (error) {
        console.log(`error is ${error}`)

        res.status(400).json({
            error : error.message
        })
    }
    
    
}

async function productById(req , res) {
    
}

module.exports = {
    productdata
}