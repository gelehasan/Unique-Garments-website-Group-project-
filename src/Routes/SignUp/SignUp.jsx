import { useState, useEffect } from 'react';
import './SignUpStyle.css';
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

        <form onSubmit={RegistrationHandlar}> 
        <div class="container">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" id="username" name='username' onChange={changeHandlar} required/>
        <input type="email" placeholder="Email" id="email" name='email'  onChange={changeHandlar} required/>
        <select id="fashion-type" name="type" onChange={changeHandlar} required> 
            <option value="">Select your fashion type</option>
            <option value="A">A</option>    
            <option value="B">B</option>    
        </select>
        <input type="password" placeholder="Password" id="password" name ="password" onChange={changeHandlar} required />
        <input type="password" placeholder="comfirmPassword" id="Password"  name='comfirmPassword'  onChange={changeHandlar} required />
        <button type="submit" >Sign Up</button>
      </div>
      </form>
      </div>
    )
}
export default SignUp;
