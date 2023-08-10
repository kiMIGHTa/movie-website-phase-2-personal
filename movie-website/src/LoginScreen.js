import React from "react";
import './LoginScreen.css'

function LoginScreen(){
    return <div className="loginScreen">
        <div className="loginScreen_background">
            <img
             className="login-logo"
             src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
             alt="logo"/>
             <button className="sign-up_button">
                Sign In
             </button>
             <div className="login-gradient"></div>
             <div className="login-body">
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                </>
             </div>
        </div>
    </div>
}

export default LoginScreen
