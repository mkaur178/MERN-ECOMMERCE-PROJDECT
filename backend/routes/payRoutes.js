const router = require("express").Router();
const stripe = require("stripe")("sk_test_51PMoRjP96DNiLxCSOzEhDT1GdeSy2afsgmoR3FnE7S2SvXmrhMyeWT94Vwz1FXrsx0rdcr3jxkYAGmCoKRckbpGP00o2jJrJnn")
const paymentModel= require("../models/payment");

router.post("/create-checkout-session" , async(req,res)=>{

    const {products} = req.body;
    const lineItems = products.map((products)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:products.name,
                images:[products.image]
            },
            unit_amount:products.price * 100,
        },
        quantity:products.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:8000/success",
        cancel_url:"http://localhost:8000/cancel",
    });

    res.json({id:session.id})
    
 
})

router.post("/orders", async(req,res) => {  
    const {amount, productitems, name, address, mobile,  pincode }= req.body;
    console.log(req.body);
    const mypayment= new paymentModel({
        name:name,
        address:address,
        mobile:mobile,
        pincode:pincode,
        productitems:productitems,
        totalproductprice:amount,
        dop:new Date()
    })
  mypayment.save();
  res.status(201).json(mypayment);

})


module.exports= router;