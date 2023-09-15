import { useState, useEffect } from 'react';
import './SignUpStyle.css';
import { signUpAuthentication, getUserInformation } from '../../Firebase/firebase';
import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUp = ()=>{
  const {currentUser}= useSelector((state)=> state.user);
  const [inputFields, setInputFields] = useState({});
  const [errorMessage, setErrorMesage]= useState();

  const Navigate = useNavigate();


  useEffect(()=>{
    if(currentUser){
      Navigate("/")
    
    }
  },[Navigate,currentUser])
  



const changeHandlar = (event)=>{
 let {value, name}=event.target;

 setInputFields({...inputFields, [name]:value})

}

const RegistrationHandlar = async (event)=>{
  event.preventDefault();
 let {username,  email, password, comfirmPassword} = inputFields;

 //We check if the validity of the password
if (password === comfirmPassword && password.length >=6) {
  try {
  
   
  // Here is where we send the data we gathered from the inputs
  //And we wait for the a response back
 await signUpAuthentication({username, email, password});
  window.location.reload()

} catch (error) {
  if (error.code === "auth/email-already-in-use") {
    setErrorMesage("Email is already in use")

  } else {
  setErrorMesage(error.message);

  }
  }}else{
 
  setErrorMesage("Your password doesn't meet the criteria")
  }
  };
  
    return(
      <div className='authContainer'>

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
