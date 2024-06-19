

import React, { useState,useEffect } from 'react'
import img1 from "../images/home.jpg"
import img2 from "../images/home2.png"
import img3 from "../images/home3.jpg"
import img4 from "../images/home4.jpg"
import img5 from "../images/home5.jpg"
import img6 from "../images/home6.jpg"
import img7 from "../images/help1.jpg"
import img8 from "../images/help2.jpg"
import img9 from "../images/help3.jpg"

import axios from "axios"

import "../css/style.css"

const Home = () => {
   const [lovingproduct, setLovingProduct] = useState([])

   const loadLovingProduct=()=>{
      let url= "http://localhost:8000/product/lovingproduct";
      axios.get(url).then((res)=>{
         // console.log(res.data.product);
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
                  <a href="#" class="card__button">Add To Cart</a>
               </div>
            </article>
            </div>
      </div>
      </>
)

   })

 return (
    <>
    

        <img src={img1} width="100%"/>

        <div className='home1' > 
          <div>
            
            
          <img src={img2} className='homeimage'/>
            
            
            </div>


            <div className='home2part'>

              <h6>EXCLUSIVE POP-UP</h6>
              <h1>Mayra® x OXO Living</h1>
              <p>Introducing Oxo Residences in partnership with Mayra: Luxury Villas <br/>in Nyanyi, Bali.<br/>
Mayra proudly collaborates with Oxo<br/> Living to create Oxo Residences in Nyanyi, Bali. These luxurious villas, designed by Alexis <br/>Dornier, seamlessly blend indoor and outdoor spaces on 2 hectares of <br/>land. Each villa offers three to five bedrooms, embodying <br/>contemporary architecture and eco-conscious practices. Residents<br/> indulge in comfort with Mayra's premium bedding, experiencing<br/> luxury living and sustainable lifestyle in Bali.</p>

       </div>
        </div>
        <hr size="1"/>


      <div className='home3'>

          <center>
       
        <h1>At Mayra®, sleep comes first <br/>– we believe that there’s a way <br/>to sleep better, naturally.</h1>

        <button>LEARN MORE</button>

        </center>
      </div>

      

      <div className='product-loving'>

        <h1>What others are loving</h1>

        {lovingProduct}




      </div>

      <hr size="1"/>

      <div className='our-belief'>
        <div>
        <img src={img3} className='img3'/>
        <img src={img4} className='img4'/>




        </div>

        <div className='our-belief-1'>
          <h3>OUR BELIEF</h3>
          <h1>New era in the<br/> sleep industry</h1>
          <p className='para'>We spend one-third of our lives sleeping. Therefore, <br/>it's important to invest in natural bedding products<br/> that are beneficial to support our health and well-<br/>being. Mayra is your one-stop premium brand for<br/> safe and sustainable bedding!</p>
         <button>DISCOVER OUR PRODUCT</button>



        </div>


        <div>
        <img src={img5} className='img5'/>
        <img src={img6} className='img6'/>
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

export default Home
