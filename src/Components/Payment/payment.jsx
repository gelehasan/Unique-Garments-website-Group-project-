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
    const [isPaymentLoading, setIsPaymentLoading ]= useState(false)
    const stripe = useStripe();
    const elements = useElements();



    const paymentHandlar = async (event)=>{
        event.preventDefault();
     
        if(!stripe || !elements) return;
        setIsPaymentLoading(true)
        const getResponse = await fetch("/.netlify/functions/create-payment", 
        {
            method:"post",
            headers:{
                "Content-Type": "application/json",
            },
            //Values are stored as whole dollars so we have to multiply by 100
            //to get the real price
            body: JSON.stringify({amount:TotalPrice * 100}),
        }
        ).then((respone) => respone.json())

      const clientSecret =getResponse.paymentIntent.client_secret;
   
       const confirmPayment = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method:{
                card: elements.getElement(CardElement),
                billing_details:inputValues
                }
            }
            )
        setIsPaymentLoading(false)
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
    <h3 className="creditCardInfo"> please use stripe test credit card </h3>
    <h3 className="creditCardInfo">4242 4242 4242 4242, 04/24,  424, 24242</h3>
    <CardElement />
    </div>
    <div className="paymentConfirmation">
     <h3> Total: ${TotalPrice} </h3>       
    <button disabled={isPaymentLoading} className="updateBtn" type="submit">
   { isPaymentLoading ?
    "Payment loading..."
    :
    "Pay Now"
}   
    </button>
    </div>
    </form>
    </div>
    )
}

export default Payment;