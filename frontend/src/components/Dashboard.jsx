import React from 'react'
import { Link, useNavigate ,Outlet} from 'react-router-dom'
import "../css/style.css"
import { useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TvIcon from '@mui/icons-material/Tv';

const Dashboard = () => {
  const [show, setShow] = useState(true);

  let username = window.localStorage.getItem("userName")
  let navigate = useNavigate();
  const backtohome=()=>{
    window.localStorage.clear();
    alert("are you sure");
    navigate("../home")
  }

  

 return (
    <>






       <div className='dashboard'>

        <div>
          <h2>Mayra</h2>
        </div>

        <div>
        <h1>Admin Dashboard</h1>

        </div>

        <div className='dash4'>
          <h3>Welcome {username}</h3>
          <button onClick={backtohome}>Logout</button>
         </div>

        </div>

       <div className='dash1'>

        <div className='dash2'>

        <FileDownloadIcon style={{position:"relative" , left:"15px" , top:"50px" , color:"#F1F4EA"}}/>

       
       <Link to="uploadproduct" style={{position:"relative" , top:"43px" , left:"20px" , color:"#F1F4EA" , textDecoration:"none"}}>Upload Product</Link><br/>

        <TvIcon style={{position:"relative" , left:"15px" , top:"80px" , color:"#F1F4EA"}} />
       <Link to="displayproduct" style={{position:"relative" , top:"75px" , left:"25px" ,fontSize:"16.5px", color:"#F1F4EA" , textDecoration:"none"}}>display Product</Link>
      


       </div>

        <div className='dash3'>

          <Outlet/>

        </div>
   
</div>


        
     
       
      
    </>
  )
}

export default Dashboard
