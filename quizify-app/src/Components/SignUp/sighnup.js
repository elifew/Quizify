import React from 'react';
import {Link} from 'react-router-dom';
import './signup_global.css';
import './signup_index.css';


const SignUp =() =>{

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Regular expressions for password complexity
    const numberRegex = /\d/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]/;
  
    // Perform validation checks
    if (
      !email.includes('@') ||
      password.length < 6 ||
      !numberRegex.test(password) ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      setError(
        'Password must be at least 6 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character.'
      );
      return;
    }
  
    // Clear any existing errors
    setError('');
  
    // Proceed with sign-in logic
  };

  return(
    <div class="sign-up">
      <div class="sign-up-box">
        <h1 class="sign-up1">SIGN-UP</h1>
        <div class="sign-up-text">
          <div class="input-rectangle"></div>
          <input class="rectangle-group" type="text" placeholder="Confirm Password"/>

          <input class="rectangle-group1" type="text" placeholder="Email Address"/>

          <input class="rectangle-group2" type="text" placeholder="Password"/>

          <input class="rectangle-group3" type="text" placeholder="Last Name"/>

          <input class="sign-up-text-child" type="text" placeholder="First Name"/>

          <div class="second-rectangle"></div>
        </div>
      </div>
      <Link to="/signup" class="sign-up2" id="sIGNUPText">SIGN UP</Link>
    </div>
  );
};

export default SignUp;
