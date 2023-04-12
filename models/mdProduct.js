var mongoose = require('mongoose');

const scmProduct = mongoose.Schema({
    productID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    type: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    },
    createDate: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updateDate: {
        type: Date,
        default: () => Date.now()
    }
})

scmProduct.pre('save', function(next){
    this.updateDate = Date.now();
    next();
})

module.exports = mongoose.model('Products',scmProduct)