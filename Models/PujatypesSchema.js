const mongoose = require("mongoose");
const { Schema } = mongoose;
const PujaSchema = new Schema({
    imageURL:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    Benifit1:{
        type: String,
        required: true,
    },
    Benifit2:{
        type: String,
        required: true,
    },
    Benifit3:{
        type: String,
        required: true,
    },
    Benifit4:{
        type: String,
        required: true,
    },
    Our_Promice1:{
        type: String,
        required: true
    },
    Our_Promice2:{
        type: String,
        required: true
    },
    Our_Promice3:{
        type: String,
        required: true
    },
    Our_Promice4:{
        type: String,
        required: true
    },
    Our_Promice5:{
        type: String,
        required: true
    },
    Our_Promice6:{
        type: String,
        required: true
    }
})
const pujadesc = mongoose.model('PujaTypes',PujaSchema)
module.exports = pujadesc;    