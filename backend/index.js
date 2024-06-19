const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const app= express();
const bodyparser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();


const adminRouter = require("./routes/adminRoutes")
const productRouter = require("./routes/productRoutes")
// const paymentRoute= require("./routes/payment");
const userRoute= require("./routes/userRoutes");
const payRoute = require("./routes/payRoutes")

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/admin" , adminRouter)
app.use("/product" , productRouter)
// app.use("/api/payment/",paymentRoute);
app.use("/user",userRoute)
app.use("/api",payRoute)

app.get('/', (req,res)=>{
    res.send("welcome to node js")
})

app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
  });