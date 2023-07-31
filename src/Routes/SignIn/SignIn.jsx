import './SignInStyle.css';

const SignIn = ()=>{

    return(
        <div class="container">
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" id="username" required />
            <input type="password" placeholder="Password" id="password" required />
            <button type="button">Log In</button>
        </div>
    )
}

export default SignIn;
