const { Product } = require('../models/product.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(person=>res.json(person))
        .catch(err=>res.json(err))
}