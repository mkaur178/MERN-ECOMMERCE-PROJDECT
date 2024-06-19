
import { useState,useEffect } from 'react'
import React from 'react'
import img1 from "../images/matt1.jpg"
import img2 from "../images/matt2.jpg"
import img3 from "../images/matt3.jpg"
import axios from "axios"
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
import img7 from "../images/help1.jpg"
import img8 from "../images/help2.jpg"
import img9 from "../images/help3.jpg"


const Mattresses = () => {
  const [lovingproduct, setLovingProduct] = useState([])
  const dispatch= useDispatch();
   const myData= useSelector((state)=>state.cartProduct.cart);
   console.log(myData)

   const loadLovingProduct=()=>{
      let url= "http://localhost:8000/product/mattress";
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
        <hr size="1"/>


      
          <h1 className='matt-1'>Get ready for the best sleep ever! Naturally breathable and<br/> responsive, Mayra® is the best all-natural mattress that Mother<br/> Nature can give.</h1>
      
          <div className='matt-2'>
            <div><img src={img1}/>
            <h2>Natural materials for healthier<br/> sleep & pure-lasting comfort</h2>
            
            </div>
            <div><img src={img2}/>
            <h2>The quintessential sleep<br/> support system</h2>
            
            </div>
            <div><img src={img3} />
            <h2>Breathable and Hypoallergenic</h2>
            
            </div>
           </div>

           <hr size="1" />

           <div className='product-loving'>

<h1>MATTRESSES</h1>

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

export default Mattresses
