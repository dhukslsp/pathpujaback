const express = require("express");
const app = express();
const port = 2001;
const connectToMongo = require("./db");
const cors = require("cors");
connectToMongo();
app.use(express.json());
app.use(cors());
app.use("/api/Retrieve", require("./RetrievePuja/PujaRetr"));
app.use("/api/Fetch", require("./RetrievePuja/FetchCustdet"));
app.use("/api/insert", require("./RetrievePuja/CustumrDet"));
app.use("/api/send", require("./SendEmail/mailsend"));
app.listen(port, () => {
    console.log('App listning to port 2001');
})
