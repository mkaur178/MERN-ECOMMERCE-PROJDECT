import React from 'react'
import img1 from "../images/contact.jpg"
import img7 from "../images/help1.jpg"
import img8 from "../images/help2.jpg"
import img9 from "../images/help3.jpg"
 
const Contact = () => {
  return (
    <>
    <div className='contact'>
    <img src={img1} />
    <p>Support</p>
    <h2>Contact</h2>

    </div>

    <div className='contact-1'>

      <div>
      <p>We're here for all your sleep questions. Check out our FAQs<br/> or contact our customer experience team for advice on your sleep<br/> concerns or everything bedding.</p>

<h3>Email</h3>
<h3>hello_ae@mayra.com</h3>

<h4>Whatsapp</h4>
<h4>+971 54 215 0061</h4>

</div>

      <div>

        <input type='text' placeholder='Name'/><br/><br/>
        <input type='text' placeholder='Email'/><br/><br/>
        <input type='text' placeholder='Contact'/><br/><br/>
        <textarea placeholder='Message'/><br/><br/>

        <button>SUBMIT</button>

        
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

export default Contact
