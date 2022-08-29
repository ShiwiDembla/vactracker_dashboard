
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    
    Fullname:{
        type:String,
        required:true,
        // minlength:3,
        // maxlength:50,
    },
    Number:{
        type:String,
        required:true
    },

    CNIC:{
        type: String,
        unique: true,
        required:true
    },
    Age:{
        type:String,
        required:true
    },
    // Gender:{
    //     type:String,
    //     required:true
    // },
    City:{
        type:String,
        required:true
    },
    Center:{    
        type:String,
        required:true
    },
    Vaccine:{
        type:String,
        required:true
    },
    Dose:{
        type:String,
        
    },
    Details:{
        type:String,
    }



})

mongoose.model('Request',requestSchema)