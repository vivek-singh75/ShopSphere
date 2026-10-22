const express  =require('express');

const productRouter  = express.Router();
const productdataController =require("../Controllers/productData.controller");

productRouter.get("/products" ,  productdataController.productdata);

module.exports=  productRouter