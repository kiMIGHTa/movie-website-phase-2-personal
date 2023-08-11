import './SignUpScreen.css'

function SignUpScreen(){
    return (
        <div className="signUpScreen">
          <form>
            <h1>Sign In</h1>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button type='submit'>Sign In</button>
            <h4>New to Netflix? Sign up now.</h4>
          </form>
        </div>
    )
}

export default SignUpScreen 