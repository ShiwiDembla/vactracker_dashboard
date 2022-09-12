const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
    regid:{
        type: String,
        unique: true,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
   long:{
    type: Number,
   },
   lat:{
    type: Number,
   },
   

})

mongoose.model('Center',centerSchema)