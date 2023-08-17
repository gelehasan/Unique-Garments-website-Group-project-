import { useContext } from "react";
import {UserContext} from "../../Context/userContext";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { SignOutUser } from "../../Firebase/firebase";
import "./profileDropStyling.css";
const ProfileDropDown = ()=>{
  const {currentUser} = useSelector((state)=> state.user)

  const signOutHandlar = ()=>{
    if(currentUser != null){
        SignOutUser();
        window.location.reload();
    }
  }
    return(
        <div className="profile-Container">
          <Link to={currentUser? "/profile" : "/signin"} > 
            <button className={ currentUser ? "profilebtn": "signIn" }>
                { currentUser? "Profile" : "Sign in" }</button>
          </Link>

          <Link to={currentUser? "" : "/signup"} > 
            <button onClick={signOutHandlar}
            className={ currentUser ? "signOutbtn": "signUp" }
            > 
                { currentUser? "Sign out" : "Sign up" }
            </button>
         </Link>
        </div>
    )
}


export default ProfileDropDown;