const express = require("express");
const router = express.Router();
const pujaPack = require("../Models/Pakages");
const PujatypesSchema = require("../Models/PujatypesSchema");
router.get('/myroute1/:puja',async(req,res)=>{
    const getpuja = req.params.puja;
    try {
        const Pujanote = await PujatypesSchema.find({ name: getpuja });
        res.json(Pujanote);
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;

