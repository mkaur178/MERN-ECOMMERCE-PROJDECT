import { useSelector, useDispatch } from 'react-redux';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import  {useNavigate} from "react-router-dom";
import {increaseQuantity, decreaseQuantity, removeItem ,cartempty} from "../productSlice";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';



const CartPage = () => {
    const cartData=useSelector((state)=>state.cartProduct.cart);
    const proCount=cartData.length;
    const dispatch= useDispatch();
   
    const navigate=useNavigate();
    const navigate1=useNavigate();

   console.log("Welcome: ")
   console.log(cartData);
   const qtyIncrease=(id)=>{
    dispatch(increaseQuantity(id))
   }
   const qtyDecrease=(id)=>{    
    dispatch(decreaseQuantity(id))
   }
   const itemRemove=(id)=>{
      dispatch(removeItem(id))
   }

   const checkOut=()=>{
    navigate("/checkout");
   }
    
   const Continue=()=>{
    navigate1("/sheets")
   }
   const empty=()=>{
    dispatch(cartempty());
    
}



   let totalAmount=0;
   var tex=0;
   var finalAmount=0;
    const myData=cartData.map((key)=>{
      totalAmount+=key.price*key.qnty;
      tex=parseInt(totalAmount*18/100);
      finalAmount=tex+totalAmount;
         return(
            <>
  
            <tr className='table'>
                    <td> <img src={key.image} width="70" height="50" /> </td>
                    <td> {key.name} </td>
                    <td>{key.categ} </td>
                    <td style={{color:"#04AA6D", fontSize:"20px"}}>
                   
                   
                   <a href='#'>
                    <IndeterminateCheckBoxIcon  onClick={()=>{qtyDecrease(key.id)}} style={{color:"#5d7261"}} />
                    </a>      
                      <span style={{paddingLeft:"10px", paddingRight:"10px", fontWeight:"bold" , position:"relative",bottom:"5px",color:"#5d7261"}}>
                      {key.qnty}
                      </span>
                      <a href='#'>
                        <LocalHospitalIcon onClick={()=>{qtyIncrease(key.id)}} style={{color:"#5d7261"}} />
                       </a> 
                        </td>
                    <td> {key.price} </td>
                    <td> {key.price*key.qnty}</td>
                    <td>
                    
                       <button onClick={()=>{itemRemove(key.id)}} className='remove'>Remove</button>
                       
                     </td>
                     
               </tr> 

               <tr>
               <td colSpan="7">
               <hr size="1"/>
                </td>
             </tr>
            
            </>
         )
    })

    if (proCount == 0)
      {
  
       return(
          <>
          <hr style={{color:"gray"}}/>
        <div className="empty">
        <h1>No Item In Your Cart <SentimentDissatisfiedIcon style={{fontSize:"40px" ,marginTop:"10px"}}/></h1>
          </div>        
  
          </>
       )
              
  
      }


  return (
      <>
      <hr size="1"/>
                   <h1 className='cart'> My Cart Items ({proCount})</h1>

             <div className='cartitem'>
              <table>

              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>category</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Total Amount</th>
                <th>Remove</th>
 </tr>
              <tr>
               <td colSpan="7">
               <hr size="1"/>
                </td>
             </tr>

{myData}

<button onClick={Continue} style={{position:"relative" , left:"30px" ,padding:"5px 10px 5px 10px" ,cursor:"pointer", color:"white", backgroundColor:"#5d7261", border:"none" , borderRadius:"5px", fontSize:"15px"}}>Continue<br/>Shopping</button>
<button onClick={empty} style={{position:"relative" , left:"890px" , padding:"5px 10px 5px 10px" ,cursor:"pointer", color:"white", backgroundColor:"#5d7261", border:"none" , borderRadius:"5px", fontSize:"15px",marginTop:"20px",marginBottom:"20px"}} >Empty Cart</button>

              </table>

           <div className='cartitem-2'>
    
            <h3 style={{position:"relative", top:"20px", left:"65px"}}>ORDER SUMMARY</h3>
            <hr size="1" style={{ position:"relative",  top:"40px"}}/>

            <p style={{position:"relative", top:"70px", left:"15px"}}>SUBTOTAL </p>  
            <div style={{position:"relative", top:"45px", left:"210px"}}>₹
            {totalAmount}
            </div>

            <p style={{position:"relative", top:"70px", left:"15px"}}>TAX-18%</p>
            
            <div style={{position:"relative", top:"45px", left:"210px"}}>₹
             {tex}
             </div>



             

            <div className="net1">
                

                

            <div style={{position:"relative", top:"3px" , textDecoration:"bold"}}> Total Amount</div>   
            
            <div style={{position:"relative",  left:"210px" , bottom:"21px"}}>₹
              {finalAmount}
             </div>
              

             <button onClick={checkOut}> Check Out </button>
            </div>
        </div>

        </div>
                
      </>
  )
}
export default CartPage;
