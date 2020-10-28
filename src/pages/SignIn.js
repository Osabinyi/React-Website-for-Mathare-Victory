import React from 'react'
import { Link } from 'react-router-dom';
import '../../src/App.css'

function SignIn() {
    return (
        <div className="sign-up">
        <div className="SignUp-container">
          <form className="Sign-Up-menu">
          <input type="email" name="email" placeholder="Enter your email" /><br />
          <input type="password" name="pass" placeholder="Enter Password" /><br />
          <button>
            Sign In
          </button><br />
          Don't have an account?
          <Link to="/sign-up">
          Sign-Up
          </Link>
          </form>
          </div>
        </div>
    )
}

export default SignIn;
