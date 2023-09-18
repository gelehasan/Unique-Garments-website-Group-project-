import { resetPassword } from "../../Firebase/firebase"
import { useState } from "react"
import "./passResetStyle.css"
const PasswordReset = ({setIsResetPassOn})=>{
    const [email, setEmail] = useState();
    const [responseMessage, setresponseMessage] = useState();
    const [isThereError, setIsThereError] = useState();

    const sendPasswordReset = async (event) => {
      event.preventDefault();
      let result = await resetPassword(email);
      let { success, message } = result;
      message = message.replace("Firebase:", "");
    
      if (success === true) {
        setresponseMessage(message);
        setIsThereError(false);
      } else {
        setresponseMessage(message);
        setIsThereError(true);
      }
    };
    
    const changeHandlar = (event)=>{
        const {value} = event.target;
        setEmail(value)
        console.log(value)
    }


    return(
      <div className="resetPassContainer">
        <span className="closeResetPage" onClick={() => setIsResetPassOn(false)}>X</span>

        <form onSubmit={sendPasswordReset}>
          {responseMessage ? 
            <p className={isThereError ? "failReset" : "successReset"}>{responseMessage}</p> : ""
          }
          <br/>

          <label>Enter your email</label>
          <br/>
          <input type="text" name="email" onChange={changeHandlar}/>
          <br/>
          <button type="submit">Send</button>
        </form>
      </div>

    )
}


export default PasswordReset;