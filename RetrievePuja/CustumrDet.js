const express = require("express");
const router = express.Router();
const CustumerDetSchema = require("../Schema/CustDetSchema");
router.post('/CustDetSave', async (req, res) => {
    try {
        const {
            pujaname,
            packageName,
            subpuja,
            hours,
            pandits,
            pices,
            CusfName,
            CuslName,
            CusPhone,
            CusGmail,
            CusAdress,
            Cuscity,
            CusState,
            CusPinCode,
            PujaEventDate,
            PujaEventTime } = req.body;
        const details = new CustumerDetSchema(
            {
                "pujaname": pujaname,
                "packageName": packageName,
                "subpuja": subpuja,
                "hours": hours,
                "pandits": pandits,
                "pices": pices,
                "CusfName": CusfName,
                "CuslName": CuslName,
                "CusPhone": CusPhone,
                "CusGmail": CusGmail,
                "CusAdress": CusAdress,
                "Cuscity": Cuscity,
                "CusState": CusState,
                "CusPinCode": CusPinCode,
                "PujaEventDate": PujaEventDate,
                "PujaEventTime": PujaEventTime
            }
        );
        const savenote = await details.save();
        res.json(savenote);
    } catch (error) {
        console.error(error);
    }
})
module.exports = router;
