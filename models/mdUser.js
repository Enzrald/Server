var mongoose = require('mongoose');

const scmUser = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    image: {
        type: Buffer
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
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

scmUser.pre('save', function(next){
    this.updateDate = Date.now();
    next();
})

module.exports = mongoose.model('Users',scmUser)