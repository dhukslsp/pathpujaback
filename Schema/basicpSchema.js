const mongoose = require("mongoose");
const { Schema } = mongoose;
const PujaSchema = new Schema({
    name:{
        type: String
    },
    Desc:{
        type: String
    },
    Benifit1:{
        type: String
    },
    Benifit2:{
        type: String
    },
    Benifit3:{
        type: String
    },
    Benifit4:{
        type: String
    },
    Basic:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Regular:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Premium:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}],
    Standard:[{Subpuja: String,hours: String,Pandit: String,Prices: String,FullPayment: String,AdvancePayment: String}]

})
const myUser = mongoose.model('basicpacks',PujaSchema)
module.exports = myUser;    