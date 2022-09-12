const router = require("express").Router();
const mongoose = require("mongoose");

require('../models/Vaccine');
const Vaccine = mongoose.model('Vaccine')

//working
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {regid,centerName,vaccineName,vaccineQuantity} = req.body;

    if(!regid || !centerName || !vaccineName || !vaccineQuantity){
        res.status(401).json("please fill the fields");
    }
else{
    try {
        const centerExists = await Vaccine.find({centerName: centerName});
        // if(centerExists){
            const x = centerExists
            .map((item)=>{
                return item.vaccineName;
                });
            // const y = JSON.parse(x);
            console.log("dont know",x);
            if(x.includes(vaccineName)){
                res.status(402).json("Vaccine Already exists");
            }
            else{
                const addvaccine = new Vaccine({
                            regid,centerName,vaccineName,vaccineQuantity
                        });
            
                        await addvaccine.save();
                        res.status(201).json(addvaccine);
                        console.log(addvaccine);
                    }
            
            // console.log(centerExists);
     
            // const {vacc} = centerExists.vaccineName;
            // console.log({vacc});
        // const vaccineExists = await centerExists.findOne({vaccineName: vaccineName});
        // console.log("vaccine in that center",vaccineExists);
       


        // if(vaccineExists){
        //     res.status(402).json("Vaccine already exists");
        // }else{
        //     const addvaccine = new Vaccine({
        //         regid,centerName,vaccineName,vaccineQuantity
        //     });

        //     await addvaccine.save();
        //     res.status(201).json(addvaccine);
        //     console.log(addvaccine);
        // }

    } catch (error) {
        res.status(422).json(error);
    }
}
})


// get vaccines

router.get("/",async(req,res)=>{
   
    try {
        const vaccines = await Vaccine.find();
        res.status(201).json(vaccines)
        console.log(vaccines);
    } catch (error) {
        res.status(422).json(error);
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

router.patch("/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatevaccine = await Vaccine.findByIdAndUpdate(id,req.body,{
            new:true,
			// vaccineName:false,
        });

        console.log(updatevaccine);
        res.status(201).json(updatevaccine);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/find/:vaccineName",async(req,res)=>{
    try {
        const vaccineName = req.params.vaccineName;
        const vaccinedetails = await Vaccine.findOne({vaccineName:vaccineName});
        
        // res.status(201).json(vaccinedetails._id);
        // console.log(vaccinedetails.vaccineQuantity-1)
        if(vaccinedetails.vaccineQuantity>0){
        const updatevaccine = await Vaccine.findByIdAndUpdate(vaccinedetails._id,{$set:{vaccineQuantity:vaccinedetails.vaccineQuantity-1}},{new:true});
        res.status(201).json(updatevaccine);
        console.log(updatevaccine);
        }
        else{
            res.status(404).json("Vaccine not available");
        }
        // const updatevaccine = await Vaccine.findByIdAndUpdate(vaccineName,req.body.vaccineQuantity,{
        //     new:true,
        // });
        

        // // const updatevaccine = await Vaccine.findByIdAndUpdate(id,req.body,{
        // //     new:true,
		// // 	// vaccineName:false,
        // // });

        // console.log(updatevaccine);
        // res.status(201).json(updatevaccine);

    } catch (error) {
        res.status(422).json(error);
    }
})



// delete user
router.delete("/delete/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletevaccine = await Vaccine.findByIdAndDelete({_id:id})
        console.log(deletevaccine);
        res.status(201).json(deletevaccine);

    } catch (error) {
        res.status(422).json(error);
    }
})
// router.get("/", async (req, res) => {
// 	try {
// 		// const user = await User.findOne({ email: req.body.email });
// 		var vaccine= await Vaccine.find();
// 		res.status(200).json(vaccine);
// 		// console.log(request);
// 		if (!vaccine){
// 			return res.status(401).send({ message: "Vaccines does not exist" });}
		
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
