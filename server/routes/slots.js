const router = require("express").Router();
const mongoose = require("mongoose");


require('../models/Slots');
// const { Request }  = require('../models/Request')
const Slots = mongoose.model('Slots')

router.get("/", async (req, res) => {
	try {
		// const user = await User.findOne({ email: req.body.email });
		var slots= await Slots.find();
		res.status(200).json(slots);
		// console.log(request);
		if (!slots){
			return res.status(401).send({ message: "Slots does not exist" });}
		
	} catch (error) {
		res.status(500).send({ message: "Internal server error"  });
		console.log(error)
	}
});


// delete user
router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const slots = await Slots.findByIdAndDelete({_id:id})
        // console.log(deleterequest);
        res.status(201).json(slots);
		// console.log("deleted req", deleterequest._id)

    } catch (error) {
        res.status(422).json(error);
    }
})

// city & center wise slots

router.get("/:City/:Center", async (req, res) => {
	City = req.params.City;
	Center = req.params.Center;
	try {
		// const user = await User.findOne({ email: req.body.email });
		var slots= await Slots.find({City, Center});
		res.status(200).json(slots);
		// console.log(request);
		if (!slots){
			return res.status(401).send({ message: "Slots does not exist" });}
		
	} catch (error) {
		res.status(500).send({ message: "Internal server error"  });
		console.log(error)
	}
});





module.exports = router;
