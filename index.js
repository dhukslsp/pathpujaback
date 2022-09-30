const express = require("express");
const path = require("path");
const app = express();
const port = 2001;
const connectToMongo = require("./db");
const cors = require("cors");
const nodemailer = require("nodemailer");
const handle = require("nodemailer-express-handlebars");
connectToMongo();
app.use(express.json());
app.use(cors());
app.use("/api/Retrieve",require("./RetrievePuja/PujaRetr"));
app.use("/api/insert",require("./RetrievePuja/CustumrDet"));
app.listen(port, () => {
    console.log('App listning to port 2001');
})
app.post("/send_email",(req,res)=>{
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:"dhruv1647.singh@gmail.com",
            pass: "ohtqlmxwhpeebguy"
        }
    });
    transporter.use('compile',handle({
        viewEngine:{
            extname: ".handlebars",
            partialsDir: path.resolve('./views'),
            defaultLayout: false
        },
        viewPath: path.resolve('./views'),
        extName: ".handlebars"

    }));
    var mailoperations = {
        from:"dhruv1647.singh@gmail.com",
        to: "pathpuja.com@gmail.com",
        subject:"Sending Mail using node js",
        template: "main",
        context:{
            title: 'Title Here'
        }
    }
    transporter.sendMail(mailoperations,(err)=>{
        console.log(err);
    });
    res.send("Mail Sent");
})