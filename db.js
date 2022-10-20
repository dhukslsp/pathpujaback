// here the data of teh database will be stored
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://pathpuja:dy_KrU3M!cDY!42@cluster0.f62mftb.mongodb.net/PathpujaData"
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongoose sucessfully");
    })
}
module.exports = connectToMongo;