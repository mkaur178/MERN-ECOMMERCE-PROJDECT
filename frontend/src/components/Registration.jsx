import React from 'react'
import { useState } from 'react';
import "../css/style.css"
import { useNavigate } from 'react-router';
import axios from "axios";

const Registration = () => {

  const [input, setinput] = useState({})
  const navigate = useNavigate();


  const handleinput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setinput(values=>({...values,[name]:value}))


  }

  const handlesubmit=()=>{
 
  let url = "http://localhost:8000/user/userregistration";
  axios.post(url,input).then((res)=>{
    alert("data save!!")
    navigate("/home");
  })
};
 
  
return (
    <div>

      <hr size="0.5"/>
      <center>

        <div className='admin'>
            
            <h1>Register Now!</h1>

            <div className='input'>
          <input type='text'  placeholder='First name' value={input.fname} name="fname" onChange={handleinput} required/><br/><br/>
          <input type='text'  placeholder='Last name' value={input.lname} name="lname" onChange={handleinput} required/><br/><br/>  
          <input type='text'  placeholder='Email' value={input.email} name="email" onChange={handleinput} required/><br/><br/>
          <input type='password' placeholder='Password' value={input.password} name="password" onChange={handleinput} required/><br/><br/>
          {/* <input type='password' placeholder='Re-Password' value={input.repassword} name="repassword" onChange={handleinput} required/><br/><br/> */}


          <button onClick={handlesubmit} >Register Now</button>
         

          </div>
        </div>
        </center>
      
    </div>
    
  )
}


export default Registration
