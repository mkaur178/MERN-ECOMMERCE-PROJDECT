const mongoose= require("mongoose")

const adminSchema= new mongoose.Schema({

   name:String,
   password:String

})

module.exports= mongoose.model("adminuser",adminSchema)