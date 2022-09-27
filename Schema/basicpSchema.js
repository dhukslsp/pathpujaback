const mongoose = require("mongoose");
const { Schema } = mongoose;
const PujaSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    Desc:{
        type: String,
        required: true,
    },
    Benifit1:{
        type: String,
        required: true
    },
    Benifit2:{
        type: String,
        required: true
    },
    Benifit3:{
        type: String,
        required: true
    },
    Benifit4:{
        type: String,
        required: true
    },
    Basic:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Regular:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Premium:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Standard:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}]

})
const myUser = mongoose.model('basicpacks',PujaSchema)
module.exports = myUser;    