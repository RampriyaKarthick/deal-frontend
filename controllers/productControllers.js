const Product = require('../models/product.model')


exports.getProducts =(req,res,next) =>{
    res.status(200).json({
        success:true,
        message:"This route will show all the products in database"
    })
}

exports.newProduct = async (req,res,next) =>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product

    })
}