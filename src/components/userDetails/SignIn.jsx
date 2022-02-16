import React from 'react';
import { Link } from 'react-router-dom';
import './userDetails.css';

const SignIn = () => {
  return (
    <div className='sign'>
    <div className="user-details-box">
        <div className="sign-logo">
            <Link to="/" className="nav-logo">
                amazon
            </Link>
        </div>
        <div className="sign-form-box">
            <h1 className="sign-header">
                Sign-in
            </h1>
            <form action="/" method="">
                <div className="sign-form-row">
                    <label htmlFor="useremail" className='sign-label'>E-mail</label>
                    <input type="email" id="useremail" className="sign-input" required />
                </div>
                <div className="sign-form-row">
                    <label htmlFor="userpassword" className='sign-label'>Password</label>
                    <input type="password" id="userpassword" className="sign-input" required />
                </div>
                <div className="sign-form-row">
                         <button type="submit" className='submit-btn'>
                        <span>Sign In</span> 
                    </button>
                </div>
            </form>
            <div className="sign-form-row">
                <p className='terms'>This site has been specially developed for the "Dracula 13" youtube channel and it is not genuine, clicking the button will indicate that you agree to these terms. Bekzod Baxriddinovich</p> 
                <Link to='/sign-up' type="submit" className='submit-btn'>Sign Up</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignIn