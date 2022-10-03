const express = require("express");
const app = express();
const connectToMongo = require("./db");
const cors = require("cors");
const port = 20;
connectToMongo();
app.use(express.json());
app.use(cors());
app.use("/api/Retrieve", require("./RetrievePuja/PujaRetr"));
app.use("/api/Fetch", require("./RetrievePuja/FetchCustdet"));
app.use("/api/insert", require("./RetrievePuja/CustumrDet"));
app.use("/api/send", require("./SendEmail/mailsend"));
app.listen(port, () => {
    console.log('App listning to port 20');
})
