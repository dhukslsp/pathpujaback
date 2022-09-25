const mongoose = require("mongoose");
const { Schema } = mongoose;
const packagedescBasic = new Schema({
    pujaname:{
        type: String,
        required: true
    },
    Subpuja:{
        type: String,
        required: true
    },
    Hours:{
        type: String,
        required: true,
    },
    pandits:{
        type: String,
        required: true
    },
    prices:{
        type: String,
        required: true
    },
})
const newPujaschema = mongoose.model('BasicPack',packagedescBasic)
module.exports = newPujaschema;    