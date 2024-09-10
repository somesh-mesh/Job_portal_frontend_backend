import mongoose, { mongo } from "mongoose";

const companySchema = new mongoose.Schema({
    name :{
        type:String,
        required :true,
    },
    description :{
        type:String,
        
    },
    website :{
        type:String,
        
    },
    location :{
        type:String,
        
    },
    logo :{
        type:String,
        
    },
      userId  :{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required :true
        
    },
},{timeseries : true});

export const Company = mongoose.model('Company',companySchema);