const express=require("express");
const app=express();
app.use(express.json());
const port=4000;
const mongoose=require("mongoose");
const userModel=require("./models/user.js");
mongoose
    .connect("mongodb://127.0.0.1:27017/fullstackk")
    .then(()=>console.log("mongo db connected"));

//login
// app.post("/api/userlogin",async(req,res)=>{
//     const username=req.body.name;
//     const password=req.body.password;
    
// })
//reg-insert
app.post("/api/registration",(req,res)=>{
    const newuser=req.body;
    userModel.create(newuser);
   return res.json({data:"data added sucessfully"});
});
//deleteuser
app.delete("/api/deleteuser/:username",async(req,res)=>{
    const username=req.params.username;
    const deleteuser=await userModel.findOneAndDelete({username});
    console.log(deleteuser);
    if(deleteuser){
        return res.send("user deleted");
    }
    return res.send("user not found");
})
//fetch user
app.get("/api/list",async(req,res)=>{
    const userList=await userModel.find({},{usernaem:true});
    if(userList.length==0)
    {
        return res.send({data:"no user found"});
    }
    return res.send({data:userList});
})
app.listen(port,()=>console.log('server running on port 4000'));