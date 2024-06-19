import {Link,Outlet} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./css/style.css"
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Layout = () => {
   const navigate = useNavigate();

  const handleAccount =()=>{
     navigate("/account")
  }
  const cartItem= useSelector((state)=>state.cartProduct.cart);
  const itemNumber= cartItem.length;
 

  return (
    <>


    <div className="tophead">

      <div className="top1">

        <p>Learn more about mayra Mattress</p> 
        <ul className="top2">
        <p>Save more when you bundle up!</p>
        <span style={{marginLeft:"10px"}}><p>Our Sustainability Efforts</p></span>

        </ul>
        
      </div>
     <div >
      <p>Showroom</p>
      <p>Support</p>
      <p>Why mayra</p>

    
      <button onClick={handleAccount} className="top3">Account</button>

      
</div>



</div>

<div className="header">

  <div className="h1">

    <p>Mayra</p>



  </div>

  <div className="h2">

        <Link to="home" className="link">HOME</Link>
        <Link to="about" className="link">ABOUT</Link>
        <Link to="mattresses" className="link">MATTRESSES</Link>
        <Link to="pillow" className="link">PILLOWS</Link>
        <Link to="sheets" className="link">SHEETS</Link>
        <Link to="mycart" className="link">MY CART</Link>
        <Link to="contact" className="link">CONTACT</Link>


    
  </div>

  <div className="h3">

    <span><SearchIcon/></span>

    
    <Link to="login">
    <span><SupervisorAccountIcon/></span>

    </Link>

    <Link to="mycart">
    <span><ShoppingCartIcon/></span>  
    <span className="cartCount"> {itemNumber} </span>
    </Link>
    


    
  </div>

</div>


        

      
       


        <Outlet/>
        <hr size="1"/>

        

        <div className="footer">

          <div className="footer1">
          <div>

              <h4>Shop</h4>
              <li>Mattresses</li>
              <li>Bed Frames</li>
              <li>Sheets</li>




      
            </div>
          <div>
            <h4>Why Mayra</h4>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Charity</li>



            
          </div>
          <div>
            <h4>Support</h4>
            <li>Contact</li>
            <li>Size Guide</li>
            <li>Made to Order</li>
            <li>Warranty</li>
          </div>
          <div>

            <h3>Catch up on the latest snooze!</h3>
            <p>Sign up for our newsletter for inspiration, exclusive previews &<br/> sleeping tips.</p>
            <input type="text" placeholder="Your Email"/>
            <div>

            </div>
        </div>

</div>
<hr size="1"/>
<div className="footer2">

  <div>
  <h4>© 2024 Mayra®. All Rights Reserved.</h4>
  </div>

  <div>

    <FacebookIcon className="icon-1"/>
    <InstagramIcon className="icon-2"/>
    <PinterestIcon className="icon-3"/>
    <YouTubeIcon className="icon-4"/>
  </div>



</div>

</div>
      
    </>
  )
}

export default Layout
