import React from 'react'
import img1 from "../images/b5.jpg"
import img3 from "../images/b6.jpg"
import img4 from "../images/soft.jpg"
import img2 from "../images/87145.png"
import img5 from "../images/sheet5.jpg"

import AirIcon from '@mui/icons-material/Air';
import LinkIcon from '@mui/icons-material/Link';
import { useState,useEffect } from 'react'
import axios from "axios"
import { addtoCart } from "../productSlice";
import { useSelector, useDispatch } from "react-redux";
import img7 from "../images/help1.jpg"
import img8 from "../images/help2.jpg"
import img9 from "../images/help3.jpg"



const Sheets = () => {
  const [lovingproduct, setLovingProduct] = useState([])
  const dispatch= useDispatch();
   const myData= useSelector((state)=>state.cartProduct.cart);
   console.log(myData)

   const loadLovingProduct=()=>{
      let url= "http://localhost:8000/product/sheets";
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
     <hr size="1" />
        
        <div className='sheet-1'>

          <div>

            <img src={img1}/>


          </div>

          <div className='sheet-2'>
            <h2>Mayra® Linen Sheets</h2>
            <p>Elevate your space with these timeless, beautifully textured and aesthetically rustic fitted, <br/>flat and duvet sheets. Made from 100% ethically sourced and organically grown European <br/>flax. All parts of the plant are fully utilised from fibres to flax seeds, leaving no waste <br/>behind!</p>
             <div className='sheet-3'>

              <p style={{position:"relative", bottom:"15px"}}><img src={img2} style={{width:"20px" , position:"relative", right:"30px", top:"20px"}}/>Hypoallergenic</p>
              <p> <AirIcon style={{position:"relative", right:"10px", top:"5px"}}/>Highly Breathable</p>
              <p> <LinkIcon style={{position:"relative", right:"8px", top:"5px"}}/>Durable & Long Lasting</p>

             </div>




          </div>


        </div>
        

        <div className='sheet-1'>


          <div className='sheet-2'>
            <h2>Mayra® Bamboo Sheets</h2>
            <p>Snuggle between these luxuriously soft, silky and smooth - fitted, flat and duvet sheets.<br/> Made with only 100% Bamboo Lyocell, using a closed-loop manufacturing process,<br/> making it the most renewable and eco-friendly bamboo fibre. <br/>behind!</p>
             <div className='sheet-3'>

              <p style={{position:"relative", bottom:"15px"}}><img src={img4} style={{width:"25px" , position:"relative", right:"30px", top:"20px"}}/>Silky soft</p>
              <p> <AirIcon style={{position:"relative", right:"10px", top:"5px"}}/>Highly Breathable</p>
              <p> <LinkIcon style={{position:"relative", right:"8px", top:"5px"}}/>Durable & Long Lasting</p>

             </div>




          </div>
          
          <div>

            <img src={img3}/>


          </div>


        </div>


        <div className='product-loving'>

<h1>Sheets</h1>

{lovingProduct}




</div>


<div className='sheet-about'>

  <div>
   
  <img src={img5}/>
    

  </div>

<div className='sheet-about-1'>


<h2>Natural materials for healthier<br/> sleep & pure-lasting comfort</h2>
<p>Our Mayra® bamboo sheets are made only with 100% bamboo<br/> lyocell, an excellent eco-friendly choice. Bamboo trees are a<br/> sustainable resource, requiring little water to thrive. Bamboo fibre<br/> is biodegradable and returns to nature without harming the<br/> environment. We use a closed-loop manufacturing process which<br/> means that the solution used to make bamboo fibres out of the<br/> bamboo pulp is 99% recaptured and reused.</p>

</div>

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

export default Sheets
