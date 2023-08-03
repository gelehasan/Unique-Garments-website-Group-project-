import './SignInStyle.css';
import { useState, useContext } from "react";
import {  UserContext} from "../../Context/userContext";
import {SignInUser} from '../../Firebase/firebase';

const SignIn = ()=>{
    const [inputFields, setInputFields]= useState();
    const {setCurrentUser} = useContext(UserContext);
    const ChangeHandlar = (event)=>{
    let  {value, name}= event.target;
   
    setInputFields({...inputFields, [name]: value})
 }
 const submitHandlar = async (event)=>{
    event.preventDefault();
    let {email,password}= inputFields;
    try{
        let {user}=  await SignInUser(email, password);
       

        setCurrentUser(user);
    }catch(error){
        console.log(error)
    }
}
    return(

        <div> 
            <form onSubmit={submitHandlar}>
        <div class="container">
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
