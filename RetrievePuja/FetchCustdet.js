const express = require("express");
const router = express.Router();
const CustdetSacema = require("../Schema/CustDetSchema");
router.get('/myroute1/fetchdetcUst',async(req,res)=>{
    try {
        const Custdet = await CustdetSacema.find();
        res.json(Custdet);
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;
