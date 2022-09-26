const router = require("express").Router();
const mongoose = require("mongoose");
const { CenterUser } = require("../models/CenterUser");

require('../models/Request');
// const { Request }  = require('../models/Request')
const Request = mongoose.model('Request')

router.get("/:City/:Center", async (req, res) => {
	City = req.params.City;
	Center = req.params.Center;
	try {
		// const user = await User.findOne({ email: req.body.email });
		var request= await Request.find({City, Center});
		res.status(200).json(request);
		// console.log(request);
		if (!request){
			return res.status(401).send({ message: "Requests does not exist" });}
		
	} catch (error) {
		res.status(500).send({ message: "xyz"  });
		console.log(error)
	}
});
//working
router.delete('/:id', function(req, res, next) {
	Request.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });
  
  
// router.get("/:id",async(req,res)=>{
//     try {
//         console.log(req.params);
//         const {id} = req.params;

//         const userindividual = await Request.findById({_id:id});
//         console.log(userindividual);
//         res.status(201).json(userindividual)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// update user data

// router.patch("/updateuser/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const updateduser = await users.findByIdAndUpdate(id,req.body,{
//             new:true
//         });

//         console.log(updateduser);
//         res.status(201).json(updateduser);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// delete user
router.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleterequest = await Request.findByIdAndDelete({_id:id})
        // console.log(deleterequest);
        res.status(201).json(deleterequest);
		// console.log("deleted req", deleterequest._id)

    } catch (error) {
        res.status(422).json(error);
    }
})

//all requests

router.get("/all", async (req, res) => {
	
	try {
		// const user = await User.findOne({ email: req.body.email });
		var request= await Request.find();
		res.status(200).json(request);
		// console.log(request);
		if (!request){
			return res.status(401).send({ message: "Requests does not exist" });}
		
	} catch (error) {
		res.status(500).send({ message: "xyz"  });
		console.log(error)
	}
});


//count users
router.get('/countRequests', async(req, res) => {
	try{
    const count = await Request.count()
	res.status(200).json(count);
    }
	catch(err) {
		res.status(422).json(err);
    }
})



module.exports = router;
