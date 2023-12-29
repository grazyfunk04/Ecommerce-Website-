import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='Your Name' />
          <input type="text" placeholder='Your Email id'/>
          <input type="password" name="" id="" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup