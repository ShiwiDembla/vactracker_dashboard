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


// get all users
router.get("/show", async (req, res) => {
	try {
		const users = await CenterUser.find();
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/showusers/:id", async (req, res) => {
	try {
		const {id} = req.params;
		const users = await CenterUser.findById({_id:id});
		res.status(200).send(users);
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// update user
// router.patch("/updateuser/:id", async (req, res) => {
// 	try {
// 		const {id} = req.params;
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });


// 			const centeruserexists = await CenterUser.findOne({ email: req.body.email });
// 		if (centeruserexists)
// 			return res
// 				.status(408)
// 				.send({ message: "User with given email already Exist!" });
// 		// const regidExists = await CenterUser.findOne({ regid: req.body.regid });
// 		// 		if (regidExists)
// 		// 			return res
// 		// 				.status(409)
// 		// 				.send({ message: "User with given registration ID already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);
		
// 		const centeruser = await CenterUser.findOneAndUpdate(
// 			{ _id: id },
// 			{ ...req.body, password: hashPassword },
// 			{ new: true }
// 		);

// 		res.status(200).send({ message: "User updated successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });


router.patch("/updateprofile/:id", async (req, res) => {
	try {
		const {id} = req.params;
		// const { error } = validate(req.body);
		const {firstName,lastName,regid,center,city} = req.body;
		if (firstName==="" || lastName==="" || regid==="" || center==="" || city===""){
			return res.status(400).send({ message: "Please fill all the fields" });
	}
	else{
		const regidExists = await CenterUser.findOne({ regid: req.body.regid });

		// console.log("regid exists",regidExists);
		// console.log("regid exists id",regidExists._id.toJSON());
		// console.log("new id",id);
		if (regidExists && regidExists._id.toJSON()!==id){
					return res.status(409).send({ message: "User with given registration ID already Exist!" });
	
			}
		else{
		const centeruser = await CenterUser.findOneAndUpdate(
			{ _id: id },
			{ ...req.body},
			{ new: true }
		);
		res.status(200).send({ message: "Profile updated successfully" });
		}

		
	}
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.patch("/updateuser/:id", async (req, res) => {
	try {
		const {id} = req.params;
		// const { error } = validate(req.body);
		const {firstName,lastName,regid,center,city,email, role} = req.body;
		if (firstName==="" || lastName==="" || regid==="" || center==="" || city==="" || email==="" || role===""){
			return res.status(400).send({ message: "Please fill all the fields" });
	}
	else{
		const regidExists = await CenterUser.findOne({ regid: req.body.regid });
		const centeruserexists = await CenterUser.findOne({ email: req.body.email });

		console.log("regid exists",regidExists);
		console.log("regid exists id",regidExists._id.toJSON());
		console.log("new id",id);
		if (regidExists && regidExists._id.toJSON()!==id){
					return res.status(409).send({ message: "User with given registration ID already Exist!" });
				
			}
		else if(centeruserexists && centeruserexists._id.toJSON()!==id){
			return res.status(408).send({ message: "User with given email already Exist!" });
		}
		else{
		const centeruser = await CenterUser.findOneAndUpdate(
			{ _id: id },
			{ ...req.body},
			{ new: true }
		);
		res.status(200).send({ message: "User updated successfully" });
		}

		
	}
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// delete user
router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleteuser = await CenterUser.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);

    } catch (error) {
        res.status(422).json(error);
    }
})

//count users
router.get('/countUsers', async(req, res) => {
	try{
    const count = await CenterUser.count({"role": "user"})
	res.status(200).json(count);
    }
	catch(err) {
		res.status(422).json(err);
    }
})

// router.get("/hello", async (req, res) => {
// 	try {
// 		res.status(200).send({ message: "Hello World" });
// 	} catch (error) {
// 		res.status(500).send({ message: "IDK" });
// 	}
// }),

module.exports = router;
