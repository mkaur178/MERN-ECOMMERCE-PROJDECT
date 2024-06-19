import React from 'react'
import { useState } from 'react';
import "../css/style.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate();

  const mynav = useNavigate();
  const checkOut=()=>{
    navigate("/registration");
   }


   const handleSubmit =async() => {
    let url ="http://localhost:8000/user/usercheck"
    await axios.post(url,{email:email , password:password})
      .then(res =>{
      
        //  alert(res.data)
          if(res.data.message === "succesfully Login"){
          window.localStorage.setItem("token",res.data.token)
          window.localStorage.setItem("email",res.data.email)
          alert(res.data.message);
          mynav("/home")
          }  
        } 
      )
 }
  

   
return (
    <div>

      <hr size="0.5"/>
      <center>
     
        <div className='admin'>
            
            <h1>Login</h1>
              <p>Log in to your account to check your previous<br/>orders, add or edit your address!</p>



            <div className='input'>
          <input type='text'  placeholder='Name' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
          <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
          <button onClick={handleSubmit} >LOG IN</button>
          <div className='input1'>
             
            <span onClick={checkOut} className='regi-btn'>Registration Now</span>

            <h4>Forget password?</h4>
          </div>

          </div>
        </div>
        </center>
      
    </div>
    
  )
}

export default Login
