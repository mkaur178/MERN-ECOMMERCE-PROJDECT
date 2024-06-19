import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from "axios";
import {loadStripe} from "@stripe/stripe-js"





const CheckOut=()=>{

  const [input, setInput]=useState({})
  const cartData=useSelector((state)=>state.cartProduct.cart);
  console.log(cartData)
    let totalAmount=0;
    let productDetails="";
    let image="";



    const myData=cartData.map((key)=>{
      totalAmount+=key.price*key.qnty;
      productDetails+=key.name+" qty -"+key.qnty+" rate-  "+ key.price;
    });
     
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value; 
      setInput(values=>({...values, [name]:value}));
    }



    const [myproduct,setMyProduct] = useState({
          price: totalAmount ,
          name:productDetails,
          img:image

  });

  
  const buybtn=async()=>{
    const stripe = await loadStripe("pk_test_51PMoRjP96DNiLxCSG85nbytev5U6IrdOCSRMGlxFMn7lDAp8Scl5AagUXlEbfvliU0U9KEIaeGKmanZLpgEVRUvV00QRlRsYcB")
    const body = {
      products:cartData
    }

    const headers ={
      "Content-Type" : "application/json"
    }
    const res = await fetch("http://localhost:8000/api/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    });

    const session = await res.json();

    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })

    if(result.error)
      {
        console.log(result.error)
      }

    const orderURL = "http://localhost:8000/api/orders";
    const data = await axios.post(orderURL, ...input).then((res)=>{
      alert(res.data.message)
    })
    // const orderData = {
    //   // amount: myproduct.price,
    //   // productitems: myproduct.name,
    //   ...input // Assuming input contains additional necessary information
    // };
    // const { data } = await axios.post(orderURL, orderData);
    // console.log('Order created:', data);
  } 
  
  // const initPay = (data) => {
  //   const options = {
  //     key : "rzp_test_vaYYeCCMwDwUhz",
  //     amount: data.amount,
  //     currency: data.currency,
  //     name: myproduct.name,
  //     description: "my good t shirt",
  //     image:myproduct.img,
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //         const verifyURL = "https://localhost:8000/api/payment/verify";
  //         const {data} = await axios.post(verifyURL,response);
  //       } catch(error) {
  //         console.log(error);
  //       }
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };
  
  // const handlePay = async () => {
  //   try {
  //     const orderURL = "https://localhost:8000/api/payment/orders";
  //     const {data} = await axios.post(orderURL,{amount: myproduct.price, productitems:myproduct.name, ...input});
  //     console.log(data);
  //     initPay(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
    
 return(
        <>

        <hr size="1"/>
          <center>
          <h1 className='pay1'> Payment</h1>
          <h2 className='pay2'> Enter Your Shipping Address</h2>
          <div className='checkout'>
            <div>
                
                <input type="text" name="name" value={input.name} onChange={handleInput} placeholder='Enter Name'/><br/><br/>
                 
              
                <input type="text" name="address" value={input.address} onChange={handleInput} placeholder='Enter Address' /> <br/><br/> 
                <input type="text" name="mobile" value={input.mobile} onChange={handleInput}  placeholder='Enter Mobile No'/> <br/><br/> 
            
               
               <input type="text" name="pincode" value={input.pincode} onChange={handleInput} placeholder='Enter Pin code' /> <br/><br/> 
           
             </div>
            <div className='checkout-1'>

                 <h2> Net Payble Amount</h2> 
                        
                <h1> {totalAmount} /- </h1>   
                       
              <button onClick={buybtn}> Pay Now!</button>
                            
                        

            </div>
          </div>
          </center>
        </>
    )
}
export default CheckOut;