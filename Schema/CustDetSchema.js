const mongoose = require("mongoose");
const { Schema } = mongoose;
const CusSchema = new Schema({
    CusAdress:{
        type: String,
        required: true
    },
    CusGmail:{
        type: String,
        required: true
    },
    CusPhone:{
        type: String,
        required: true
    },
    CusPinCode:{
        type: String,
        required: true
    },
    CusState:{
        type: String,
        required: true
    },
    Cuscity:{
        type: String,
        required: true
    },
    CusfName:{
        type: String,
        required: true
    },
    CuslName:{
        type: String,
        required: true
    },
    PujaEventDate:{
        type: String,
        required: true
    },
    PujaEventTime:{
        type: String,
        required: true
    },
    hours:{
        type: String,
        required: true
    },
    packageName:{
        type: String,
        required: true
    },
    pandits:{
        type: String,
        required: true
    },
    pices:{
        type: String,
        required: true
    },
    pujaname:{
        type: String,
        required: true
    },
    subpuja:{
        type: String,
        required: true
    }

})
const myUser = mongoose.model('UsersCollect',CusSchema);
module.exports = myUser;
