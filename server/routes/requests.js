const router = require("express").Router();
const mongoose = require("mongoose");
const { CenterUser } = require("../models/CenterUser");

require('../models/Request');
// const { Request }  = require('../models/Request')
const Request = mongoose.model('Request')

router.get("/", async (req, res) => {
	try {
		// const user = await User.findOne({ email: req.body.email });
		var request= await Request.find();
		res.status(200).json({ data: request, message: "Requests fetched sucessfuly" });
		// console.log(request);
		if (!request){
			return res.status(401).send({ message: "Requests does not exist" });}
		
	} catch (error) {
		res.status(500).send({ message: "xyz"  });
		console.log(error)
	}
});


module.exports = router;
