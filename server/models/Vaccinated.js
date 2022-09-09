
const mongoose = require('mongoose');

const vaccinatedSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true,
    },
    Email:{
        type: String, 
        required: true,
    },
    Phone:{
        type:String,
        required:true,
    },
    CNIC:{
        type:Number,
        required:true,
        unique: true,
        
    },
    City:{
        type:String,
        required:true,
    },
    Center:{
        type:String,
        required:true,
    },
    Vaccine:{
        type:String,
        required:true,
    },
    Date:{
        type:String,
        required:true,
    },
    Time:{
        type:String,
        required:true,
    },
    UserID:{
        type:String,
        required: true,
    }




})

mongoose.model('Vaccinated',vaccinatedSchema)