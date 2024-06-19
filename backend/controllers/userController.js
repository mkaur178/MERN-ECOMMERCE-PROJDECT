const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
var secret_key="manpreet";

const userRegistrationSave=async(req,res)=>{
    let {fname,lname,email,password} = req.body;

    console.log(fname,lname,email,password);


    const user= new userModel({
        fname:fname,
        lname:lname,
        email:email,
        password:password
    })

    user.save();
    res.send("Data save!!")
}


const userCheck=async(req,res)=>{

    let email=req.body.email;
    let password=req.body.password;
    
    console.log( email,password);
    const user= await userModel.findOne({email:email})
    // console.log(user);
    if(!user){
    return res.json('invalid email !')
    }
    const isvalidpass = await bcrypt.compare(password,user.password)
    // console.log(isvalidpass);
    if(!isvalidpass)
    {
       return res.send("invalid password")
    }
    const token = jwt.sign({userid:user._id,email:user.email},secret_key)
    console.log(token);
    res.status(200).json({token,email:user.email,message: 'succesfully Login' })
    }


module.exports={
    userRegistrationSave,
    userCheck
}
