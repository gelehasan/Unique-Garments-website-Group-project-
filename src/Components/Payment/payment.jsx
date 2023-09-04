import PaymentUserDetails from "./userDetails"
import { CardElement } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { getTotalPrice } from "../../Store/Reducers/CartReducer/cartSelector";
const Payment = ()=>{
    const TotalPrice = useSelector(getTotalPrice);
    const Stripe = useStripe();
    const Elements = useElements();

    const paymentHandlar = (event)=>{
        event.preventDefault();

        if(!Stripe || !Elements) return;
        

    }


    return(
    <div className="paymentContainer">
    <form onSubmit={paymentHandlar}>
    <PaymentUserDetails />

    <div className="creditCard">
    <CardElement />
    </div>
  
    <div className="paymentConfirmation">
     <h3> Total: ${TotalPrice} </h3> 
        
    <button className="updateBtn"> Pay Now</button>
    </div>
    </form>
    </div>
    )
}

export default Payment;