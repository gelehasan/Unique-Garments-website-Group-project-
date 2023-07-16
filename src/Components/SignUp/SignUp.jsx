import { useState, useEffect } from 'react';
import './SignUp.css';
import { signUpAuthentication } from '../../Firebase/firebase';
import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';
const SignUp = ()=>{

  const [inputFields, setInputFields] = useState({});
  const [mounted, setMounted] = useState(true);
  
  const Navigate = useNavigate();
  const {setCurrentUser,currentUser}= useContext(UserContext)


  useEffect(() => {
    return () => {
      // Cleanup function to be executed when the component is unmounted
      setMounted(false); // Update state to indicate that the component is unmounted
      // Cancel any subscriptions or asynchronous tasks here
    };
  }, []);

const changeHandlar = (event)=>{
 let {value, name}=event.target;

 setInputFields({...inputFields, [name]:value})

}

const RegistrationHandlar = async (event)=>{
  event.preventDefault();
 let {username,  email, password, comfirmPassword, type} = inputFields;

 //We check if the validity of the password
if (password === comfirmPassword && password.length >=6) {
  try {
    if(!type) type="A"
   
  // Here is where we send the data we gathered from the inputs
  //And we wait for the a response back
  const user= await signUpAuthentication({username, email, password, type})
 setCurrentUser(user)

} catch (error) {
  if (error.code === "auth/email-already-in-use") {

  alert("email already in use");
  } else {
  console.log("encountered an error", error);
  }
  }}else{
  alert("Your password doesn't meet the criteria")
  }
  };
  
    return(
        <div>
            <div    className="signUp-Container">
       
       <div    className="signUp-content">
  
            <form onSubmit={RegistrationHandlar}> 
 
       <h2>Don't have an account?</h2>
       <h4>Sign up</h4>
       <label>Username</label> <br/>
       <input type='text' name='username' required onChange={changeHandlar}></input>
       <br/>
       <label>Email</label> <br/>
       <input type='email' name='email'  required  onChange={changeHandlar}  ></input>
       <br/>
       <br/>
    
       <label>Fashion Type</label>
       <br></br>
       <select id="fashionType" name='type' required onChange={changeHandlar} >

      <option value="A">A</option>
      <option value="B">B</option>
     
    </select>
    <br/>
       <label>Password</label> <br/>
       <input type='password' name='password'required onChange={changeHandlar}></input>
       <br/>
       <label>comfirmPassword</label> <br/>
       <input type='password'  name='comfirmPassword' required onChange={changeHandlar} ></input>
       <br/>   <br/>
       <button className='signUpbtn' type='submit'>Submit</button>
         </form> 
         </div>
       <div className="signUp-card">
         
      
       </div>
        
       </div>
        </div>
    )
}
export default SignUp;