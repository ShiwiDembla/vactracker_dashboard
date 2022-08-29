const router = require("express").Router();
const { CenterUser } = require("../models/CenterUser");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error){
			return res.status(400).send({ message: error.details[0].message });}

		// const user = await User.findOne({ email: req.body.email });
		const centeruser= await CenterUser.findOne({ email: req.body.email });
		console.log(centeruser);
		if (!centeruser){
			return res.status(401).send({ message: "User does not exist" });}

		const validPassword = await bcrypt.compare(
			req.body.password,
			centeruser.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		
		const token = centeruser.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
		
		
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error"  });
		console.log(error)
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
