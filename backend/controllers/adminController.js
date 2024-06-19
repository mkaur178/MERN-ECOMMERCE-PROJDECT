const adminModel = require("../models/adminModel")

const adminUserCheck=async(req,res)=>{
    const {name, password} = req.body;
    adminModel.findOne({name:name}).then((user)=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("this password is incorrect")
            }
        }else{
            res.json("no record found")

        }
    })
}

module.exports={
    adminUserCheck
}
