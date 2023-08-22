import "./AccountStyle.css";
import { countries } from "./countriesData";
const AccountManagement = ()=>{

    return(
   <div className="accountManagementContainer">
  <h3 className="accountInfoLabel"> Account Details </h3>

  <div className="accountInformation">
    <h3 className="sectionLabels"> Account information </h3>

    <h5 className="fieldLabel"> First name </h5>

    <input className="accountInput" type="text" />

    <h5 className="fieldLabel"> Last name </h5>

    <input className="accountInput" type="text" />

    <h5 className="fieldLabel"> Phone Number</h5>

    <input className="accountInput" type="number" />

  </div>

  <div className="passWordDetails">
    <h3 className="sectionLabels"> Password </h3>
    <h5 className="fieldLabel">Old Password </h5>

    <input className="accountInput" type="text" />

    <h5 className="fieldLabel"> New Password </h5>

    <input className="accountInput" type="text" />

  </div>
  <div className="shippingAddress">
    <h3 className="sectionLabels"> Shipping </h3>
    <h5 className="fieldLabel"> Shipping Address </h5>

    <input className="accountInput" type="text" />

    <h5 className="fieldLabel"> Country </h5>

    <select className="accountInput" id="country" name="country">

        {
            countries.map((country)=>(
                <option key={country}>{country}</option>
                
            ))
        }
    </select>
  </div>

  <div className="categoryChoice">

    <h3 className="sectionLabels">Preference </h3>
    <h5 className="fieldLabel"> Choose Your Preference </h5>

    <div className="categoryImage">
      <div className="imageRadioWrapper">
        <img id="casualImage" src="https://th.bing.com/th/id/OIP.InJ8RWrYRZuUfT6PW3nvuQHaHa?pid=ImgDet&rs=1" alt="Casual Image" />
        <label>
          <input type="radio" name="category" value="casual" /> Casual
        </label>
      </div>
      

      <div className="imageRadioWrapper">
        <img id="formalImage" src="https://th.bing.com/th/id/OIP.nhoCniy0PQn_UPv54ACbVwHaE8?spid=ImgDet&rs=1" alt="Formal Image" />
        <label>
          <input type="radio" name="category" value="formal" /> Formal
        </label>
      </div>
    </div>

  </div>
  <div className="submitDiv">
    <button className="updateBtn"> Save </button>
  </div>
</div>
    )
}


export default AccountManagement;
