import './SignInStyle.css';
import { useState, useContext, useEffect } from "react";
import {SignInUser} from '../../Firebase/firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PasswordReset from '../../Components/PasswordReset/passwordReset';
import { Helmet } from 'react-helmet';

const SignIn = ()=>{
    const {currentUser}= useSelector((state)=> state.user);
    const [inputFields, setInputFields]= useState();
    const [isResetPassOn, setIsResetPassOn] = useState();
    const [errorMessage, setErrorMesage] = useState();
    const Navigate = useNavigate();
    
    useEffect(()=>{
        if(currentUser){
            Navigate("/")
        }
    },[currentUser])

    const ChangeHandlar = (event)=>{
    let  {value, name}= event.target;
    setInputFields({...inputFields, [name]: value})
    }

    const submitHandlar = async (event) => {
        event.preventDefault();
        let { email, password } = inputFields;
        try {
        await SignInUser(email, password);
        } catch (error) {
        let errorResponse = error.message.replace("Firebase:", "");
        setErrorMesage(errorResponse);
        }
    };
  
    return(   
        <div className='authContainer'> 
        <Helmet>
        <title>Sign in page</title>
        <meta name='description' content='Log in if you have an account' /> 
      </Helmet>
        {isResetPassOn && <PasswordReset setIsResetPassOn={setIsResetPassOn}  /> } 
        <form onSubmit={submitHandlar}>
         <div className="SignIncontainer">
       
            {errorMessage ? <p className='errorSignIn' aria-label='Error section'>{errorMessage}</p> : ""}

            <h1>Sign In</h1>

            <label htmlFor="email">Email</label>  <br/>
            <input type="email" name="email" id="email" onChange={ChangeHandlar} required />
            <br/>

            <label htmlFor="password">Password</label>  <br/>
            <input type="password" name="password" id="password" onChange={ChangeHandlar} required />
       
            <p  onClick={()=> setIsResetPassOn(!isResetPassOn)}>
            Forgot password?</p>
        <br/>
        <button type="submit" aria-label="Sign In to your account" role="button">Log In</button>
    </div>
    </form>
    </div>
    


    )
}

export default SignIn;
