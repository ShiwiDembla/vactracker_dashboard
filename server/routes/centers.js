const router = require("express").Router();
const mongoose = require("mongoose");

require('../models/Center');
const Center = mongoose.model('Center')

//show centers
router.get("/",async(req,res)=>{
    try {
        const centers = await Center.find();
        res.status(201).json(centers)
        console.log(centers);
    } catch (error) {
        res.status(422).json(error);
    }
});

// add center
router.post("/add", async (req, res) => {
	try {
		
		const centers = await Center.findOne({ regid: req.body.regid });
		if (centers)
			return res
				.status(409)
				.send({ message: "Center already Exists!" });

		await new Center({ ...req.body }).save();
		res.status(201).send({ message: "Center added successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
		console.log(error)
	}
});

   //delete center
router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletecenter = await Center.findByIdAndDelete({_id:id})
        console.log(deletecenter);
        res.status(201).json(deletecenter);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;