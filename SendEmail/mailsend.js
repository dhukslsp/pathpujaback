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
            pujaDate: req.body.PujaEventDate,
            hours: req.body.PujaEventTime,
            prices: req.body.pices*20/100,
            CusAdress:req.body.CusAdress,
            Cuscity:req.body.Cuscity,
            CusState:req.body.CusState,
            CusPinCode: req.body.CusPinCode
        }
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.send("Mail Sent");
})
router.post("/send_email1", async(req, res) => {
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
        subject: "Congratulations!! Booking Confirmed.",
        template: "CustumerConfirm",
        context: {
            CusfName: req.body.CusfName,
            CuslName: req.body.CuslName,
            Puja_Name: req.body.pujaname,
            packageName: req.body.packageName,
            performdate: req.body.PujaEventDate,
            CusAdress:req.body.CusAdress,
            Cuscity:req.body.Cuscity,
            CusState:req.body.CusState,
            CusPinCode: req.body.CusPinCode,
            prices: req.body.pices*20/100,
            performdate: req.body.PujaEventDate
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