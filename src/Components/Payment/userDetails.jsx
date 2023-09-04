import "./userDetailsStyle.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {getTotalPrice} from "../../Store/Reducers/CartReducer/cartSelector"

const PaymentUserDetails = ({inputValues, setInputValues,inputFieldsValue })=>{
    const currentUser = useSelector((state)=>state.user.currentUser);
    const TotalPrice = useSelector(getTotalPrice);
    

    useEffect(()=>{
        if(currentUser){
            inputFieldsValue=  {
                userName:currentUser.displayName,
                fullName: currentUser.fullName,
                phone: currentUser.phone,
                country: currentUser.country,
                shippingAddress: currentUser.shippingAddress,
                email: currentUser.email
            }
            setInputValues( inputFieldsValue)

        }
     },[currentUser])

     const ChangeHandlar = async (event)=>{
        let  {value, name}= event.target;
       
        
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
     }

    const { fullName, phone, country, shippingAddress,email} = inputValues;
    return(
        <div>


  <h3 className="paymentAccountInfoLabel"> Payment </h3>
  <div className="PaymentaccountInformation">
    <h3 className="PaymentsectionLabels"> Account information </h3>

    <h5 className="fieldLabel"> Full name </h5>
    <input className="accountInput" type="text"name="fullName" value={fullName} onChange={ChangeHandlar} required/>

    <h5 className="fieldLabel"> Email</h5>
    <input className="accountInput" type="text"  name="email" value={email}  onChange={ChangeHandlar}  required />

    <h5 className="fieldLabel"> Phone Number</h5>
    <input className="accountInput" type="number"  name="phone" value={phone} onChange={ChangeHandlar} />
  </div>

  <div className="shippingAddress">
    <h3 className="PaymentsectionLabels"> Shipping </h3>
    <h5 className="fieldLabel"> Shipping Address </h5>

    <input className="accountInput" type="text"  name="shippingAddress" value={shippingAddress} onChange={ChangeHandlar} />
    <h5 className="fieldLabel"> Country </h5>
    <input className="accountInput" type="text"  name="country"  value={country} onChange={ChangeHandlar} />

  </div>

 

        </div>
    )
}


export default PaymentUserDetails;