const express = require("express")
const router = express.Router();
const pujatpes = require("../Models/PujatypesSchema");
const Packages = require("../Models/Pakages")
const packagedescBasic = require("../Models/PujaPackages/packageDescBasic");
const standardpack = require("../Models/PujaPackages/StandardPackage");
const premium = require("../Models/PujaPackages/premium");
const regularPack = require("../Models/PujaPackages/Regular");
router.post('/insertData', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujatype = await pujatpes.create({
        imageURL: req.body.imageURL,
        name: req.body.name,
        Benifit1: req.body.Benifit1,
        Benifit2: req.body.Benifit2,
        Benifit3: req.body.Benifit3,
        Benifit4: req.body.Benifit4,
        Our_Promice1: req.body.Our_Promice1,
        Our_Promice2: req.body.Our_Promice2,
        Our_Promice3: req.body.Our_Promice3,
        Our_Promice4: req.body.Our_Promice4,
        Our_Promice5: req.body.Our_Promice5,
        Our_Promice6: req.body.Our_Promice6

    })
    res.json(pujatype)
}
);
//This is a basic regular DESC
router.post('/RegularPackage', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujatype = await regularPack.create({
        pujaname: req.body.pujaname,
        Subpuja: req.body.Subpuja,
        Hours: req.body.Hours,
        pandits: req.body.pandits,
        prices: req.body.prices
    })
    res.json(pujatype)
}
);
//basic package
router.post('/BasicPackage', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujatype = await packagedescBasic.create({
        pujaname: req.body.pujaname,
        Subpuja: req.body.Subpuja,
        Hours: req.body.Hours,
        pandits: req.body.pandits,
        prices: req.body.prices
    })
    res.json(pujatype)
}
);
//standar
router.post('/StandardPack', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujatype = await standardpack.create({
        pujaname: req.body.pujaname,
        Subpuja: req.body.Subpuja,
        Hours: req.body.Hours,
        pandits: req.body.pandits,
        prices: req.body.prices
    })
    res.json(pujatype)
}
);
router.post('/Premiumpack', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujatype = await premium.create({
        pujaname: req.body.pujaname,
        Subpuja: req.body.Subpuja,
        Hours: req.body.Hours,
        pandits: req.body.pandits,
        prices: req.body.prices
    })
    res.json(pujatype)
}
);
//Regular
router.post('/inserpackagesData', async (req, res) => {
    // check weather the user with the same e mail exists already
    const pujapackagessave = await Packages.create({
        pujaname: req.body.pujaname,
        Basic: req.body.Basic,
        Regular: req.body.Regular,
        premium: req.body.premium,
        Standard: req.body.Standard
    })
    res.json(pujapackagessave)
}

);
module.exports = router;