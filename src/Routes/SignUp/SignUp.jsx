import { useState, useEffect } from 'react';
import './SignUpStyle.css';
import { signUpAuthentication } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const SignUp = ()=>{
  const {currentUser}= useSelector((state)=> state.user);
  const [inputFields, setInputFields] = useState({});
  const [errorMessage, setErrorMesage]= useState();

  const Navigate = useNavigate();


  useEffect(()=>{
    if(currentUser){
      Navigate("/")
    
    }
  },[currentUser])
  

  const changeHandlar = (event)=>{
  let {value, name}=event.target;
  setInputFields({...inputFields, [name]:value})
  }

  const RegistrationHandlar = async (event) => {
    event.preventDefault();
    let { username, email, password, comfirmPassword } = inputFields;

    if (password === comfirmPassword && password.length >= 6) {
      try {
        await signUpAuthentication({ username, email, password });
        window.location.reload();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMesage("Email is already in use");
        } else {
          setErrorMesage(error.message);
        }
      }
    } else {
      setErrorMesage("Your password doesn't meet the criteria");
    }
  };

  
    return(
      <div className='authContainer'>
      <Helmet>
        <title>Sign up page</title>
        <meta name='description' content='Sing up  if you  dont have an account' /> 
      </Helmet>
        <form onSubmit={RegistrationHandlar}> 
      
        <div className="SignUpcontainer">
        {errorMessage ? <p className='errorSignIn' aria-label='Error section'>{errorMessage}</p> : ""}
        
        <h1>Sign Up</h1>
        
        <label htmlFor="username" >Username</label>  <br/>
        <input type="text" id="username" name='username' onChange={changeHandlar} required maxLength="7"/>
       
        <br/> 
        <label htmlFor="email" >Email</label> <br/>
        <input type="email"  id="email" name='email'  onChange={changeHandlar} required/>
        <br/> 
        
        <label htmlFor="password" >Password</label><br/>
        <input type="password" id="password" name ="password" onChange={changeHandlar} required />
        <br/>
        
        <label htmlFor="comfirmPassword">Comfirm Password</label><br/>
        <input type="password"  id="Password"  name='comfirmPassword'  onChange={changeHandlar} required />
        <br/>
       
        <button type="submit" aria-label="Sign Up for an Account" role="button"> Sign Up</button>
      </div>
      </form>
      </div>
    )
}
export default SignUp;
