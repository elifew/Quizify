import React from 'react';
import {Link} from 'react-router-dom';
import './signup_global.css';
import './signup_index.css';


const SignUp =() =>{
  return(
  <body>
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
{/*
    <script>
      var sIGNUPText = document.getElementById("sIGNUPText");
      if (sIGNUPText) {
        sIGNUPText.addEventListener("click", function (e) {
          // Please sync "Home w/ Login" to the project
        });
      }
      </script>
    */}

  </body>
  );
};

export default SignUp;
