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
router.post('/myroute1/fetchdetcUst/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const Custdet = await CustdetSacema.find({_id :id});
        res.json(Custdet);
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;
