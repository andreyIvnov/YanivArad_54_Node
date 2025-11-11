const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, require: true },
    color: String,
    price: Number
},
{
    versionKey: false
})

const Product = mongoose.model('product', schema, 'products');

module.exports = Product;