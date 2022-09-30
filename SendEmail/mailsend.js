const express = require("express");
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");
const handle = require("nodemailer-express-handlebars");

router.post("/send_email", async(req, res) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pathpuja.com@gmail.com",
            pass: "cusmislepyatibhb"
        }
    });
    transporter.use('compile', handle({
        viewEngine: {
            extname: ".handlebars",
            partialsDir: path.resolve('./views'),
            defaultLayout: false
        },
        viewPath: path.resolve('./views'),
        extName: ".handlebars"

    }));
    var mailoperations = {
        from: "pathpuja.com@gmail.com",
        to: req.body.CusGmail,
        subject: "Regarding Puja Booking with Pathpuja",
        template: "main",
        context: {
            CusfName: req.body.CusfName,
            CuslName: req.body.CuslName,
            Puja_Name: req.body.pujaname,
            packageName: req.body.packageName,
            hours: req.body.hours,
            prices: req.body.pices*20/100
        }
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send("Mail Sent");
})
module.exports = router;