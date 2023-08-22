import "./AccountStyle.css";
import { countries } from "./countriesData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateAccount } from "../../Firebase/firebase";
let inputFieldsValue  = {
    userName:"",
    fullName: "",
    phone: "",
    country: "",
    shippingAddress: "",
    type: "",
};
const AccountManagement = ()=>{
    const currentUser = useSelector((state)=>state.user.currentUser);
    const [isEdit, setisEdit] = useState(true);
    const [inputValues, setInputValues] = useState(inputFieldsValue);
    

     useEffect(()=>{
        if(currentUser){
            setInputValues( {
                userName:currentUser.displayName,
                fullName: currentUser.fullName,
                phone: currentUser.phone,
                country: currentUser.country,
                shippingAddress: currentUser.shippingAddress,
                type: currentUser.type
            })


        }
   
     },[currentUser])
    const {userName, fullName, phone, country, shippingAddress, type} = inputValues;

    const ChangeHandlar = (event)=>{
        let  {value, name}= event.target;
       
    
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
     }

    const updateAccountDetails = async (event)=>{
        event.preventDefault();
       let result=     await updateAccount (currentUser.id,inputValues)
       
        console.log(result)
        window.location.reload();
    }
 
 
    return(
   <div className="accountManagementContainer">
    <button className="editbtn" onClick={()=>setisEdit(!isEdit)}>Edit</button>
<form onSubmit={updateAccountDetails}> 
  <h3 className="accountInfoLabel"> Account Details </h3>
  <div className="accountInformation">
    <h3 className="sectionLabels"> Account information </h3>

    <h5 className="fieldLabel"> Full name </h5>
    <input className="accountInput" type="text" disabled={isEdit} name="fullName" value={fullName} onChange={ChangeHandlar}/>

    <h5 className="fieldLabel"> User name </h5>
    <input className="accountInput" type="text"  disabled={isEdit} name="userName" value={userName} required onChange={ChangeHandlar}/>

    <h5 className="fieldLabel"> Phone Number</h5>
    <input className="accountInput" type="number" disabled={isEdit} name="phone" value={phone} onChange={ChangeHandlar} />
  </div>


  <div className="passWordDetails">
    <h3 className="sectionLabels"> Password </h3>
    <h5 className="fieldLabel">Old Password </h5>

    <input className="accountInput" name="oldPassword" type="text" disabled={isEdit} onChange={ChangeHandlar} />

    <h5 className="fieldLabel"> New Password </h5>

    <input className="accountInput" name="newPassword" type="text" disabled={isEdit}  onChange={ChangeHandlar}/>

  </div>
  <div className="shippingAddress">
    <h3 className="sectionLabels"> Shipping </h3>
    <h5 className="fieldLabel"> Shipping Address </h5>

    <input className="accountInput" type="text"  disabled={isEdit} name="shippingAddress" value={shippingAddress} onChange={ChangeHandlar} />
    <h5 className="fieldLabel"> Country </h5>
    <input className="accountInput" type="text"   disabled={isEdit} name="country"  value={country} onChange={ChangeHandlar} />

  </div>

  <div className="categoryChoice">

    <h3 className="sectionLabels">Preference </h3>
    <h5 className="fieldLabel"> Choose Your Preference </h5>

    <div className="categoryImage">
      <div className="imageRadioWrapper">
        <img id="casualImage" src="https://th.bing.com/th/id/OIP.InJ8RWrYRZuUfT6PW3nvuQHaHa?pid=ImgDet&rs=1" alt="Casual Image" />
        <label>
          <input type="radio" name="type" value="casual" disabled={isEdit} onChange={ChangeHandlar}  checked={type === "casual"}/> Casual
        </label>
      </div>
      

      <div className="imageRadioWrapper">
        <img id="formalImage" src="https://th.bing.com/th/id/OIP.nhoCniy0PQn_UPv54ACbVwHaE8?spid=ImgDet&rs=1" alt="Formal Image" />
        <label>
          <input type="radio" name="type" value="formal" disabled={isEdit} onChange={ChangeHandlar}  checked={type === "formal"}/> Formal
        </label>
      </div>
    </div>

  </div>
  <div className="submitDiv">
    <button className="updateBtn" disabled={isEdit} type="submit"> Save </button>
  
  </div>
  </form>
</div>
    )
}


export default AccountManagement;
