const productModel = require("../models/productModel")
const payModel = require("../models/payment")

const productsave=async(req,res)=>{
    let {pname,description,category,tags,price,imgpath} = req.body;

    const product= await productModel.create({


        name:pname,
        description:description,
        category:category,
        tags:tags,
        price:price,
        imagepath:imgpath

})

product.save();
res.send("ok")


}


const lovingproductDisplay=async(req,res)=>{

   
    const response= await productModel.find({tags:"lovingproduct"}).limit(4);

   res.status(200).json({product:response});

}
const mattressDisplay=async(req,res)=>{

   
    const response= await productModel.find({category:"Mattress"}).limit(4);

   res.status(200).json({product:response});

}
const  PillowsDisplay=async(req,res)=>{

   
    const response= await productModel.find({category:"pillow"}).limit(4);

   res.status(200).json({product:response});

}

const  SheetsDisplay=async(req,res)=>{

   
    const response= await productModel.find({category:"Sheets"}).limit(4);

   res.status(200).json({product:response});

}

const productDisplay=async(req,res)=>{
    payModel.find().then((data)=>{
        res.send(data)
    })
}



module.exports={
    productsave,
    lovingproductDisplay,
    mattressDisplay,
    productDisplay,
    PillowsDisplay,
    SheetsDisplay
    
}
