const express = require("express");
const router = express.Router();
const basicdscpujaSchema = require("../Schema/basicpSchema")
router.get('/myroute1/:puja',async(req,res)=>{
    const getpuja = req.params.puja;
    try {
        const Pujanote = await basicdscpujaSchema.find({ name: getpuja });
        res.json(Pujanote);
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;
