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

router.get("/:id",async(req,res)=>{
   
    try {
        const {id} = req.params;
        const centers = await Center.findById({_id:id});
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

// update user
router.patch("/updatecenter/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const centerexists = await Center.findOne({ regid: req.body.regid });
		if (centerexists)
			return res
				.status(409)
				.send({ message: "Center with this registration ID already Exist!" });
        const updateuser = await Center.findByIdAndUpdate({_id:id},req.body,{new:true})
        console.log(updateuser);
        res.status(201).json(updateuser);
    }catch(error){
        res.status(422).json(error);
    }
})



//count centers
router.get('/count/centers', async(req, res) => {
	try{
    const count = await Center.count()
	res.status(200).json(count);
    }
	catch(err) {
		res.status(422).json(err);
    }
})
module.exports = router;