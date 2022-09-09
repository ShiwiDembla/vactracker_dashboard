const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    regid:{
        type: String,
        required:true
    },
    centerName:{
        type:String,
        required:true,
        
    },
    vaccineName:{
        type:String,
        // unique: true,
        required:true,
    },
    vaccineQuantity:{
        type:Number,
        required:true,
    }

    // moderna:{
    //     type:Number,
    //     required:true
    // },
    // pfizer:{
    //     type:Number,
    //     required:true
    // },
    // sinopharm:{
    //     type:Number,
    //     required:true
    // },
    // sinovac:{
    //     type:Number,
    //     required:true
    // },
    // sputnik:{
    //     type:Number,
    //     required:true
    // },
    // astraZeneca:{
    //     type:Number,
    //     required:true
    // },
    
   

})

mongoose.model('Vaccine',vaccineSchema)