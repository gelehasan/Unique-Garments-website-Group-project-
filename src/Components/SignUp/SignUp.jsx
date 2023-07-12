import './SignUp.css';
const SignUp = ()=>{
    return(
        <div>
            <div    className="signUp-Container">
       
       <div    className="signUp-content">
  
            <form > 
 
       <h2>Don't have an account?</h2>
       <h4>Sign up</h4>
       <label>Username</label> <br/>
       <input type='text' name='username' required></input>
       <br/>
       <label>Email</label> <br/>
       <input type='email' name='email'  required    ></input>
       <br/>
       <br/>
    
       <label>Fashion Type</label>
       <br></br>
       <select id="fashionType" required>
      <option value="">A</option>
      <option value="tote">B</option>
     
    </select>
    <br/>
       <label>Password</label> <br/>
       <input type='password' name='password'required ></input>
       <br/>
       <label>comfirmPassword</label> <br/>
       <input type='password'  name='comfirmPassword' required  ></input>
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