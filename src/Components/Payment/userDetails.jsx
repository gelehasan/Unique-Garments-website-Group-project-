import "./userDetailsStyle.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {getTotalPrice} from "../../Store/Reducers/CartReducer/cartSelector"

const PaymentUserDetails = ({inputValues, setInputValues,inputFieldsValue })=>{
    const currentUser = useSelector((state)=>state.user.currentUser);
  
    

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

    <label className="fieldLabel" htmlFor="fullName"> Full name </label>
    <input className="accountInput" type="text"name="fullName" value={fullName} onChange={ChangeHandlar} required/>

    <label className="fieldLabel" htmlFor="email"> Email</label>
    <input className="accountInput" type="text"  name="email" value={email}  onChange={ChangeHandlar}  required />

    <label className="fieldLabel" html="phone"> Phone Number</label>
    <input className="accountInput" type="number"  name="phone" value={phone} onChange={ChangeHandlar} />
  </div>

  <div className="shippingAddress">
    <h3 className="PaymentsectionLabels"> Shipping </h3>
    <label className="fieldLabel" htmlFor="shippingAddress"> Shipping Address </label>
    <input className="accountInput" type="text"  name="shippingAddress" value={shippingAddress} onChange={ChangeHandlar} />

    <label className="fieldLabel" htmlFor="country"> Country </label>
    <input className="accountInput" type="text"  name="country"  value={country} onChange={ChangeHandlar} />

  </div>
        </div>
    )
}


export default PaymentUserDetails;