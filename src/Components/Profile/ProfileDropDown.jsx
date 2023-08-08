import { useContext } from "react";
import {UserContext} from "../../Context/userContext";
import { Link } from "react-router-dom";
import "./profileDropStyling.css";
const ProfileDropDown = ()=>{
    const {currentUser} = useContext(UserContext);
    return(
        <div className="profile-Container">
          <Link to={currentUser? "/profile" : "/signin"} > 
            <button className={ currentUser ? "profilebtn": "signIn" }>
                { currentUser? "Profile" : "Sign in" }</button>
          </Link>
          
          <Link to={currentUser? "" : "/signup"} > 
            <button className={ currentUser ? "signOutbtn": "signUp" }> 
                { currentUser? "Sign out" : "Sign up" }
            </button>
         </Link>
        </div>
    )
}


export default ProfileDropDown;