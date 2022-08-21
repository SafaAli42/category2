const mongoose= require("mongoose");
// A- create schema object
const schema=new mongoose.schema({
    _id:{type:Number},
    name:{
        type:String,
        required:true,
        unique:true
    }

})

// B- mapping 

mongoose.model("category",schema);

// C-
