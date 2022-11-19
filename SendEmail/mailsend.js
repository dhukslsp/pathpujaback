const express = require("express");
const router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");
const handle = require("nodemailer-express-handlebars");
const send_NotifyEmail = () => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pathpuja.com@gmail.com",
            pass: "segnrjteqkjhakxz"
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
        to: "pathpuja.com@gmail.com",
        subject: "PAYMENT CONFIRMAYTION REQUIRED!",
        template: "Notify",
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
}
router.post("/send_email", async (req, res) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pathpuja.com@gmail.com",
            pass: "segnrjteqkjhakxz"
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
            prices: req.body.pices * 20 / 100,
            CusAdress: req.body.CusAdress,
            Cuscity: req.body.Cuscity,
            CusState: req.body.CusState,
            CusPinCode: req.body.CusPinCode
        },
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
    send_NotifyEmail();
    res.send("Mail Sent");
})
const send_Sakshammail = (fname,lname,CusAdress,CusGmail,phone,amt,packageName,pujaName,PujaEventDate,PujaEventTime) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pathpuja.com@gmail.com",
            pass: "segnrjteqkjhakxz"
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
        to: "pathpuja.com@gmail.com",
        subject: "Hay! New Booking Confirmed",
        template: "RetailerConf",
        context: {
            CusfName: fname,
            CuslName: lname,
            Puja_Name: pujaName,
            packageName: packageName,
            CusAdress:CusAdress,
            prices: amt*20/100,
            CusGmail: CusGmail,
            phone: phone,
            pujaDate: PujaEventDate,
            PujaEventTime: PujaEventTime
        }
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
}
router.post("/send_email1", async (req, res) => {
    console.log(req.body.CusPinCode);
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pathpuja.com@gmail.com",
            pass: "segnrjteqkjhakxz"
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
            CusAdress: req.body.CusAdress,
            Cuscity: req.body.Cuscity,
            CusState: req.body.CusState,
            CusPinCode: req.body.CusPinCode,
            prices: req.body.pices * 20 / 100,
            performdate: req.body.PujaEventDate,
            performtime: req.body.PujaEventTime
        }
    }
    transporter.sendMail(mailoperations, (err) => {
        if (err) {
            console.log(err);
        }
    });
    send_Sakshammail(req.body.CusfName,req.body.CuslName,req.body.CusAdress,req.body.CusGmail,req.body.CusPhone,req.body.pices,req.body.packageName,req.body.pujaname,req.body.PujaEventDate,req.body.PujaEventTime)
    res.send("Mail Sent");
    //Sending mail to Saksham Agaarwal

})
module.exports = router;