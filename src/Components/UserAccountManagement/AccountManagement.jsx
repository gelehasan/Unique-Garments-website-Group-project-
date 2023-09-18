import "./AccountStyle.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateAccount } from "../../Firebase/firebase";
import { resetPassword } from "../../Firebase/firebase";
let inputFieldsValue  = {
    userName:"",
    fullName: "",
    phone: "",
    country: "",
    shippingAdress: "",
    type: "",
};
const AccountManagement = ()=>{
    const currentUser = useSelector((state)=>state.user.currentUser);
    const [isEdit, setisEdit] = useState(true);
    const [inputValues, setInputValues] = useState(inputFieldsValue);
    const [resetPassResponse,setResetPassResponse] = useState("")
    
    

    const requestPasswordReset = async ()=>{
      if(isEdit==false){ 
        const result = await resetPassword (currentUser.email)
      
       const {message}= result
     
       setResetPassResponse(message)
      }
       
    }

     useEffect(()=>{
        if(currentUser){
            setInputValues( {
                userName:currentUser.displayName,
                fullName: currentUser.fullName,
                phone: currentUser.phone,
                country: currentUser.country,
                shippingAdress: currentUser.shippingAdress,
                type: currentUser.type
            })
        }
     },[currentUser])
    const {userName, fullName, phone, country, shippingAdress, type} = inputValues;

    const ChangeHandlar = (event)=>{
        let  {value, name}= event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
     }

    const updateAccountDetails = async (event)=>{
        event.preventDefault();
        await updateAccount (currentUser.id,inputValues)
        window.location.reload()
      
    }

    const toggleEditingMode=()=>{
      if(currentUser){
        setisEdit(!isEdit)
      } 
    }
 
 
    return(
    <div className="accountManagementContainer">
      <button className="editbtn" onClick={toggleEditingMode} aria-label="Start editing your page">Edit</button>
     
      <form onSubmit={updateAccountDetails}>
         <h3 className="accountInfoLabel">Account Details</h3>
       
        <div className="accountInformation">
          <h3 className="sectionLabels">Account information</h3>
          <label className="fieldLabel" htmlFor="fullName">Full name</label>
          <input className="accountInput" type="text" disabled={isEdit} name="fullName" value={fullName} onChange={ChangeHandlar}/>
          <label className="fieldLabel" htmlFor="userName">User name</label>
          <input className="accountInput" type="text" maxLength="6" disabled={isEdit} name="userName" value={userName} required onChange={ChangeHandlar}/>
          <label className="fieldLabel" htmlFor="phone">Phone Number</label>
          <input className="accountInput" type="number" disabled={isEdit} name="phone" value={phone} onChange={ChangeHandlar} />
        </div>

  
        <div className="passWordDetails">
          <h3 className="sectionLabels">Password</h3>
          {resetPassResponse ? <h5 className="fieldLabel">{resetPassResponse}</h5> : ""}
          <button type="button" className="requestPasswordReset" onClick={requestPasswordReset} style={{ outline: 'none' }}>Request password Reset</button>
        </div>


        <div className="shippingAddress">
          <h3 className="sectionLabels">Shipping</h3>
          <label className="fieldLabel" htmlFor="shippingAdress">Shipping Address</label>
          <input className="accountInput" type="text" disabled={isEdit} name="shippingAdress" value={shippingAdress} onChange={ChangeHandlar} />
          <label className="fieldLabel" htmlFor="country">Country</label>
          <input className="accountInput" type="text" disabled={isEdit} name="country" value={country} onChange={ChangeHandlar} />
        </div>


        <div className="categoryChoice">
          <h3 className="sectionLabels">Preference</h3>
          <h5 className="fieldLabel">Choose Your Preference</h5>
          <div className="categoryImage">
            <div className="imageRadioWrapper">
              <img id="casualImage" src="https://th.bing.com/th/id/OIP.InJ8RWrYRZuUfT6PW3nvuQHaHa?pid=ImgDet&rs=1" alt="Casual clothing image" />
              <label htmlFor="casualRadio">
                <input type="radio" name="type" value="casual" disabled={isEdit} onChange={ChangeHandlar} checked={type === "casual"} /> Casual
              </label>
            </div>
            <div className="imageRadioWrapper">
              <img id="formalImage" src="https://th.bing.com/th/id/OIP.nhoCniy0PQn_UPv54ACbVwHaE8?spid=ImgDet&rs=1" alt="Formal clothing image" />
              <label htmlFor="formRadio">
                <input type="radio" name="type" value="formal" disabled={isEdit} onChange={ChangeHandlar} checked={type === "formal"} /> Formal
              </label>
            </div>
          </div>
        </div>

        <div className="submitDiv">
          <button className="updateBtn" disabled={isEdit} type="submit" role="button" aria-label="Save your changes">Save</button>
        </div>

      </form>
    </div>

    )
}


export default AccountManagement;
