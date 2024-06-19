import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import axios from "axios"
import "../css/style.css"

const AdminUser = () => {

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();


  const getlogin=(e)=>{
    e.preventDefault();
    let url = "http://localhost:8000/admin/checkadmin";
    axios.post(url,{name:name , password:password}).then((result) =>{
      if(result.data === "success"){
        window.localStorage.setItem("userName" , name)
        navigate("/dashboard")
      }
      else{
        alert("you r not user")
      }
    })
  }
return (
    <div>

      <hr size="0.5"/>
      <center>
     
        <div className='admin'>
            
            <h1>Welcome</h1>
              <p>Log in to your account to check your previous<br/>orders, add or edit your address!</p>



            <div className='input'>
          <input type='text'  placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
          <input type='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
          <button onClick={getlogin}>LOG IN</button>
          <div className='input1'>
            <h3>Create account <EastIcon style={{position:"relative" , left:"5px",top:"5px",fontSize:"20px"}}/></h3>
            <h4>Forget password?</h4>
          </div>

          </div>
        </div>
        </center>
      
    </div>
    
  )
}

export default AdminUser
