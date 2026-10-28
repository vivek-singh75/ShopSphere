const productModel = require("../Schemas/productModel")

async function productdata(req, res) {

    try {

        const limit = Number(req.query.limit) || 10;
        const skip = Number(req.query.skip) || 0;

        const maxPrice = req.query.maxPrice
            ? Number(req.query.maxPrice)
            : null;

        // ---------------------------------------------
        // VALIDATION
        // ---------------------------------------------

        if (limit <= 0) {
            return res.status(400).json({
                message: "Limit must be greater than 0"
            });
        }

        if (skip < 0) {
            return res.status(400).json({
                message: "Skip cannot be negative"
            });
        }

        if (
            maxPrice !== null &&
            (Number.isNaN(maxPrice) || maxPrice < 0)
        ) {
            return res.status(400).json({
                message: "Invalid maxPrice"
            });
        }


        // ---------------------------------------------
        // FILTER
        // ---------------------------------------------

        const filter = {};

        /*
            Database price is USD.

            Frontend:
            USD × 50 = INR

            Therefore:

            INR max price / 50 = USD max price
        */

        if (maxPrice !== null) {

            const maxPriceUSD = maxPrice / 50;

            filter.price = {
                $lte: maxPriceUSD
            };
        }


        // ---------------------------------------------
        // FETCH PRODUCTS
        // ---------------------------------------------

        const productData = await productModel
            .find(filter)
            .skip(skip)
            .limit(limit);


        // ---------------------------------------------
        // TOTAL MATCHING PRODUCTS
        // ---------------------------------------------

        const totalProducts = await productModel.countDocuments(filter);


        // ---------------------------------------------
        // RESPONSE
        // ---------------------------------------------

        console.log(
            `Fetched ${productData.length} products`,
            `| skip: ${skip}`,
            `| limit: ${limit}`,
            `| total: ${totalProducts}`
        );


        return res.status(200).json({

            message: `${productData.length} products fetched`,
            productData,
            totalProducts,
            limit,
            skip
        });


    } catch (error) {

        console.log(`error is ${error}`);

        return res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
}



async function productById(req , res) {
    try {
        const productId = req.query.id;

        if(!productId){
            return res.status(400).json({message : "productId is not defined"})
        } 
        console.log(productId)

        const product = await productModel.findById(productId);

        if(!product){
            return res.status(404).json({message : "Product not found"})
        }

        console.log(product)

        res.status(200).json({
            message : "product details",
            product
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : error.message
        })
    }
}

module.exports = {
    productdata,
    productById
}