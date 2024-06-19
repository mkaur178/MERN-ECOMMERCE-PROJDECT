import React from 'react'
import img1 from "../images/p5.jpg"
import { useState,useEffect } from 'react'
import axios from "axios"
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
import img7 from "../images/help1.jpg"
import img8 from "../images/help2.jpg"
import img9 from "../images/help3.jpg"

const Pillows = () => {
    const [lovingproduct, setLovingProduct] = useState([])
  const dispatch= useDispatch();
   const myData= useSelector((state)=>state.cartProduct.cart);
   console.log(myData)

   const loadLovingProduct=()=>{
      let url= "http://localhost:8000/product/pillows";
      axios.get(url).then((res)=>{
         console.log(res.data.product);
         setLovingProduct(res.data.product)
      })
   }

   useEffect(()=>{
      loadLovingProduct();
   },[])


   const lovingProduct = lovingproduct.map((key)=>{
      return(
         <>

      <div class="container">
         <div class="card__container">
            <article class="card__article">
               <img src={key.imagepath} class="card__img" tyle={{width:"250px", height:"300px"}}/>

               <div class="card__data">
                  <span class="card__description">{key.name}</span>
                  <h2 class="card__title">{key.price} /-</h2>
                  <button className="card__button" onClick={
            ()=>{dispatch(addtoCart({id:key._id, name:key.name, brand:key.brand, desc:key.description, 
            categ:key.category, price:key.price, image:key.imagepath, qnty:1}))}}>Add To Cart</button>
               </div>
            </article>
            
            </div>
      </div>
      </>
)

   })

return (
    <>

    <div className='pillow-1'>

        <div>
            <img src={img1}/>
        </div>
        <div className='pillow-2'>
            <p>PILLOW FINDER</p>
            <h2>I like to sleep in any position </h2>
            <h3>I prefer pillows with any  support.</h3>
        </div>
</div>


<div className='product-loving'>

<h1>PILLOWS</h1>

{lovingProduct}




</div>

<div className='help'>
         <div className='help-2'>
            <h3>We’re here to help</h3>
            <p>Our trained sleep consultants are ready to assist you with all your sleeping<br/> needs by video, phone or in-store.</p>

            <p>Mayra Singapore<br/>
32 Eng Hoon St, Singapore 169780</p>

            <p>Monday - Friday: 9am - 6pm<br/>
Saturday - Sunday: 10am - 7pm
</p>



         </div>

         <div className='help-1'>

            <div><img src={img7}/></div>
            <div><img src={img8}/></div>
            <div><img src={img9}/></div>

          </div>

      </div>



     
    </>
  )
}

export default Pillows
