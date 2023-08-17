import './SignInStyle.css';
import { useState, useContext } from "react";
import {  UserContext} from "../../Context/userContext";
import {SignInUser, getUserInformation} from '../../Firebase/firebase';
import { SetUser } from '../../Store/Reducers/UserReducer/userAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SignIn = ()=>{
    const {currentUser}= useSelector((state)=> state.user);
    const [inputFields, setInputFields]= useState();
    const {setCurrentUser} = useContext(UserContext);

    const Navigate = useNavigate();


    if(currentUser){
      Navigate("/")
    }
    const ChangeHandlar = (event)=>{
    let  {value, name}= event.target;
   
    setInputFields({...inputFields, [name]: value})
 }
 const submitHandlar = async (event)=>{
    event.preventDefault();
    let {email,password}= inputFields;
    try{
     await SignInUser(email, password);
      
    }catch(error){
        console.log(error)
    }
}
    return(

        <div> 
            <form onSubmit={submitHandlar}>
        <div className="container">
            <h1>Sign In</h1>
            <input type="email" placeholder="email" name="email" id="email" onChange={ChangeHandlar} required />
            <input type="password" placeholder="Password" name="password" id="password" onChange={ChangeHandlar} required />
            <button type="submit">Log In</button>
        </div>
        </form>
        </div>
    )
}

export default SignIn;
