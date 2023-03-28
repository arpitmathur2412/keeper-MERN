const express=require("express")
const mongoose=require("mongoose")
const userschema =require("../models/User")
const { body, validationResult } = require('express-validator');
const { json } = require("body-parser");
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET="!@#$%^"
const fetchuser=require("../middleware/fetchuser")

const router=express.Router();

const User=mongoose.model("User",userschema)
User.createIndexes();

router.get("/",(req,res)=>{
    res.send("/api/auth");
})

// ROUTE-1

//Create a User using: POST "/api/auth"   Doesn't require Auth
router.post("/createuser",

body('name').exists(),
body('password').isLength({min:8}),
body('email').isEmail(),

async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    let temp= await User.findOne({"email":req.body.email})
    console.log(temp);
    if(temp){
        return res.status(400).json({error:"user already exists"})
    }

else{
    
    let pass=await req.body.password;

    const salt=await bcrypt.genSaltSync(10)
    const secpass=await bcrypt.hash(pass,salt)

    let user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secpass
    });
    
    const data={
    user:
    {
        id:user.id
    }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
    res.send({authtoken})
}
})

// ROUTE-2
//Authenticating using: POST "/api/auth/login" --doesn't requires Auth

router.post("/login",

body('email').isEmail(),
body('password').exists(),
async (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    else{
        const {email,password}=req.body;

        try {
            const user=await User.findOne({email:email})
            if(!user){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
            const passwordcompare= await bcrypt.compare(password,user.password)

            if(!passwordcompare){
                res.status(400).json({error:"Incorrect credentials entered!"})
            }
            else{
                
            const payload={
                user:{
                    id:user.id
                }
            }   
            const authtoken=jwt.sign(payload,JWT_SECRET);
            res.json({authtoken})
        }
    }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error occurred")
        }
    }

})

//ROUTE -3
// Get user details of already signed up user using : POST: /api/auth/getuser   /login required

router.post("/getuser",fetchuser,async (req,res)=>{

try {
    const userid=req.user.id;
    const user=await User.findById(userid).select("-password");
    res.send(user); 
} catch (error) {
    console.log(error.message);
    res.status(500).json("Internal server error occured")
    
}
})

module.exports=router