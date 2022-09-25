const express = require("express");
const app = express();
const port = 2001;
const connectToMongo = require("./db");
const pujaschema = require("./Models/PujatypesSchema");
const cors = require("cors");

connectToMongo();
app.use(express.json());
app.use(cors());
app.use("/api/inserdetails",require("./inserpuja/insert"));
app.use("/api/Retrieve",require("./RetrievePuja/PujaRetr"));
app.listen(port, () => {
    console.log('App listning to port 2001');
})