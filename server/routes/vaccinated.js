const router = require("express").Router();
const mongoose = require("mongoose");

require('../models/vaccinated');
const Vaccinated = mongoose.model('Vaccinated')

//working
// router.post("/add",async(req,res)=>{
    // console.log(req.body);
//     const {regid,centerName,vaccineName,vaccineQuantity} = req.body;

//     if(!regid || !centerName || !vaccineName || !vaccineQuantity){
//         res.status(401).json("please fill the fields");
//     }
// else{
//     try {
        
//         const vaccineExists = await Vaccine.findOne({vaccineName: vaccineName});
//         console.log(vaccineExists);

//         if(vaccineExists){
//             res.status(402).json("Vaccine already exists");
//         }else{
//             const addvaccine = new Vaccine({
//                 regid,centerName,vaccineName,vaccineQuantity
//             });

//             await addvaccine.save();
//             res.status(201).json(addvaccine);
//             console.log(addvaccine);
//         }

//     } catch (error) {
//         res.status(422).json(error);
//     }
// }

//totally working

router.post("/add",async(req,res)=>{
const {Username, Email, Phone, City, Center, Vaccine, UserID, CNIC, Date, Time} = req.body;
   
Vaccinated.findOne({CNIC}).then(data => {
    if(data){return res.status(404).json({message: "Already Vaccinated"});}
    
else{
//book new slot
const vaccinated = new Vaccinated({
    Username:req.body.Username,
    Email:req.body.Email,
    Phone:req.body.Phone,
    City:req.body.City,
    Center:req.body.Center,
    Vaccine:req.body.Vaccine,
    UserID : req.body.UserID,
    CNIC:req.body.CNIC,
    Date:req.body.Date,
    Time:req.body.Time,
    })

    vaccinated.save()
res.status(200).json({data:vaccinated, message:"Vaccinated Successfully"})
// .then(data=>{
//     console.log(data)
//     res.send("Signup success")
// })
}
})
.catch(err => {
    console.log(err)
    res.status(400).json({
        success: false,
    })
}) 
})


// get vaccines

router.get("/",async(req,res)=>{
    try {
        const vaccinated = await Vaccinated.find();
        res.status(201).json(vaccinated)
        console.log(vaccinated);
    } catch (error) {
        res.status(422).json(error);
    }
})

//count vaccinated
router.get('/countVaccinated', async(req, res) => {
	try{
    const count = await Vaccinated.count()
	res.status(201).json(count);
    }
	catch(err) {
		res.status(422).json(err);
    }
})

// get individual vaccine

// router.get("/:vaccineName",async(req,res)=>{
//     try {
//         // console.log(req.params);
//         const {vaccineName} = req.params;

//         const singleVaccine = await Vaccine.findById({vaccineName:vaccineName});
//         console.log(singleVaccine.data);
//         res.status(201).json(singleVaccine)

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// update user data

// router.patch("/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const updatevaccine = await Vaccine.findByIdAndUpdate(id,req.body,{
//             new:true,
// 			// vaccineName:false,
//         });

//         console.log(updatevaccine);
//         res.status(201).json(updatevaccine);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })


// // delete user
// router.delete("/delete/:id",async(req,res)=>{
//     try {
//         const {id} = req.params;

//         const deletevaccine = await Vaccine.findByIdAndDelete({_id:id})
//         console.log(deletevaccine);
//         res.status(201).json(deletevaccine);

//     } catch (error) {
//         res.status(422).json(error);
//     }
// })
// router.get("/", async (req, res) => {
// 	try {
// 		// const user = await User.findOne({ email: req.body.email });
// 		var vaccinated= await Vaccinated.find();
// 		res.status(200).json(vaccinated);
// 		// console.log(request);
// 		if (!vaccinated){
// 			return res.status(401).send({ message: "Vaccines does not exist" });
//         }
		
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error"  });
// 		console.log(error)
// 	}
// });

// //working
// router.delete('/:id', function(req, res, next) {
// 	Vaccine.findByIdAndRemove(req.params.id, req.body, function (err, post) {
// 	  if (err) return next(err);
// 	  res.json(post);
// 	});
//   });
  


module.exports = router;
