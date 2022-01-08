const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    username:String,
    password:String,
    name:String,
    age:Number,
})
  
const userModel=mongoose.model("fullstack",userschema,"fullstack");
module.exports=userModel;
