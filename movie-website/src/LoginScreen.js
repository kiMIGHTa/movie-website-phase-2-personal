import React, { useState } from "react";
import './LoginScreen.css'


function LoginScreen(){

const [signIn, setSignIn]=useState(false)

    return <div className="loginScreen">
        <div className="loginScreen_background">
            <img
             className="login-logo"
             src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
             alt="logo"/>
             <button className="sign-up_button"
             onClick={()=>setSignIn(true)}>
                Sign In
             </button>
             <div className="login-gradient"></div>
             <div className="login-body">
                {signIn? (
                    <SignUpScreen/>
                ):( 
                      <>
                    <h1> Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="login-input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button className="login-getStarted"
                            onClick={()=>setSignIn(true)}>
                                GET STARTED</button>
                        </form>
                    </div>
                    </>)}
             
             </div>
        </div>
    </div>
}

export default LoginScreen
