import './SignInStyle.css';
import { useState, useContext, useEffect } from "react";
import {  UserContext} from "../../Context/userContext";
import {SignInUser, getUserInformation} from '../../Firebase/firebase';
import { SetUser } from '../../Store/Reducers/UserReducer/userAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PasswordReset from '../../Components/PasswordReset/passwordReset';

const SignIn = ()=>{
    const {currentUser}= useSelector((state)=> state.user);
    const [inputFields, setInputFields]= useState();
    const {setCurrentUser} = useContext(UserContext);
    const [isResetPassOn, setIsResetPassOn] = useState();
    const [errorMessage, setErrorMesage] = useState();
    const Navigate = useNavigate();
    
    useEffect(()=>{
        if(currentUser){
            Navigate("/")
        }
    },[currentUser,Navigate])

  

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
            let errorResponse =error.message.replace("Firebase:", "");
                
        setErrorMesage(errorResponse)
     
    }
}
    return(   
        <div className='authContainer'> 

        {isResetPassOn && <PasswordReset setIsResetPassOn={setIsResetPassOn}  /> } 
        <form onSubmit={submitHandlar}>
         <div className="SignIncontainer">
       
            {errorMessage ? <p className='errorSignIn'>{errorMessage}</p> : ""}

            <h1>Sign In</h1>

            <label >Email</label>  <br/>
            <input type="email" name="email" id="email" onChange={ChangeHandlar} required />
            <br/>

            <label >Password</label>  <br/>
            <input type="password" name="password" id="password" onChange={ChangeHandlar} required />
       
            <p  onClick={()=> setIsResetPassOn(!isResetPassOn)}>
            Forgot password?</p>
        <br/>
        <button type="submit">Log In</button>
    </div>
    </form>
    </div>
    


    )
}

export default SignIn;
