const mongoose= require("mongoose")
const bcrypt = require('bcrypt');

const userSchema= new mongoose.Schema({

    fname:String,
    lname:String,
    email:String,
    password:String
    

})
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
      return next();
    }
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }

})

module.exports= mongoose.model("user",userSchema)