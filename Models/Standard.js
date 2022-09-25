const mongoose = require("mongoose");
const { Schema } = mongoose;
const pujapakagesschema = new Schema({
    pujaname:{
        type: String,
        required: true
    },
    Basic:{
        type: String,
        required: true
    },
    Regular:{
        type: String,
        required: true,
    },
    premium:{
        type: String,
        required: true
    },
    Standard:{
        type: String,
        required: true
    },
})
const newPujaschema = mongoose.model('PujaPack',pujapakagesschema)
module.exports = newPujaschema;    