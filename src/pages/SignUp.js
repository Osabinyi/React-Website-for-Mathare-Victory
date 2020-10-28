import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'


function SignUp() {
  return (
    <div className="sign-up">
    <div className="SignUp-container">
      <form className="Sign-Up-menu">
      <input type="text" name="fname" placeholder="Enter Name" /><br />
      <input type="email" name="email" placeholder="Enter your email" /><br />
      <input type="password" name="pass" placeholder="Enter Password" /><br />
      <input type="password" name="pass-confirm" placeholder="Confirm Password" /><br />
      <button>
        Sign-Up
      </button><br />
      Already have an account?
      <Link to="/sign-in">
      Sign-In
      </Link>
      </form>
      </div>
    </div>
  )
}

export default SignUp;


