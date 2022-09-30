const express = require("express");
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");
const handle = require("nodemailer-express-handlebars");

router.post("/send_email", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "dhruv1647.singh@gmail.com",
            pass: "ohtqlmxwhpeebguy"
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
        from: "dhruv1647.singh@gmail.com",
        to: "pathpuja.com@gmail.com",
        subject: "Regarding Puja Booking with Pathpuja",
        template: "main",
        context: {
            CusfName: req.body.fname,
            CuslName: req.body.lname,
            Puja_Name: req.body.Pujaname,
            packageName: req.body.packageName,
            hours: req.body.hours,
            prices: req.body.prices
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