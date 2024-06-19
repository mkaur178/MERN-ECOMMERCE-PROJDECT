

import React from 'react'
import axios from "axios"
import { useEffect,useState } from 'react'

const Displayproduct = () => {

    const [Data, setData] = useState([])

  const loadData=()=>{
    axios.get("http://localhost:8000/product/productdisplay").then((res)=>{
      setData(res.data)
    })

}

useEffect(()=>{
  loadData()
},[])

const ans = Data.map((key)=>{
  return(
    <>
    <tr>
      <td style={{backgroundColor:"#F4F1EA" , padding:"5px"}}>{key.name}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.address}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.mobile}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.pincode}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.productitems}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.totalproductprice}</td>
      <td style={{backgroundColor:"#F4F1EA"}}>{key.dop}</td>
      <td><button className='display-button'>Order Placed</button></td>


    </tr>
    </>
  )
})

return (
    <div>

<table align="centre" width="1130" bgcolor="#5d7261" border="0.5px" style={{position:"relative", top:"80px", padding:"3px"}}>
        <tr>

   <th style={{backgroundColor:"#5d7261" ,padding:"8px" ,color:"#F4F1EA"}}>NAME</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>ADDRESS</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>MOBILE</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>PINCODE</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>PRODUCT ITEM</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>TOTAL AMOUNT</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>DATE OF PURCHASE</th>
   <th style={{backgroundColor:"#5d7261" ,color:"#F4F1EA"}}>Order Placed</th>




          
        </tr>

        {ans}


        </table>
      
    </div>
  )
}

export default Displayproduct
