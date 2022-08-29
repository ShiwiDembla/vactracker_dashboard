const router = require("express").Router();
const { CenterUser, validate } = require("../models/CenterUser");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const centeruser = await CenterUser.findOne({ email: req.body.email });
		if (centeruser)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new CenterUser({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
		console.log(error)
	}
});

// router.get("/hello", async (req, res) => {
// 	try {
// 		res.status(200).send({ message: "Hello World" });
// 	} catch (error) {
// 		res.status(500).send({ message: "IDK" });
// 	}
// }),

module.exports = router;
