const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    serialNamber: { type: String, require: true },
    name: { type: String, require: true },
    price: Number,
    img: String,
    color: String
},
{
    versionKey: false
})

const Product = mongoose.model('product', schema, 'products');

module.exports = Product;