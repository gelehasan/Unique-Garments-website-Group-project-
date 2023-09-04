import PaymentUserDetails from "./userDetails"
import { CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { getTotalPrice } from "../../Store/Reducers/CartReducer/cartSelector";
import { json } from "react-router-dom";
import { useState } from "react";
import { inputFieldsValue } from "./userInput";
const Payment = ()=>{
    const TotalPrice = useSelector(getTotalPrice);
    const [inputValues, setInputValues] = useState(inputFieldsValue);
    const stripe = useStripe();
    const elements = useElements();



    const paymentHandlar = async (event)=>{
        event.preventDefault();
     
        if(!stripe || !elements) return;
        
        const getResponse = await fetch("/.netlify/functions/create-payment", 
        {
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({amount:TotalPrice}),
        }
        ).then((respone) => respone.json())

        console.log(getResponse)
      const clientSecret =getResponse.paymentIntent.client_secret;
   
       const confirmPayment = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name:"ahmed"}
                }
            }
            )
            if(confirmPayment.error){
                alert(confirmPayment.error)
                console.log(confirmPayment.error)
            }else if(confirmPayment.paymentIntent.status== "succeeded"){
            alert("Payment successful")
        } 

            
    }


    return(
    <div className="paymentContainer">
    <form onSubmit={paymentHandlar}>
    <PaymentUserDetails  inputValues={inputValues} setInputValues={setInputValues}/>

    <div className="creditCard">
    <CardElement />
    </div>
  
    <div className="paymentConfirmation">
     <h3> Total: ${TotalPrice} </h3> 
        
    <button className="updateBtn" type="submit"> Pay Now</button>
    </div>
    </form>
    </div>
    )
}

export default Payment;