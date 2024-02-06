import React from 'react';
import './login_global.css';
import './login_index.css';


const Login = () => {

  const navigateToSignUp = () => {
    window.location.href = '/signup'
  };

  return(
<div>
  
  <body>
    <div class="login">
      <div class="login-child"></div>
      <div class="wrapper">
        <img class="icon" alt="" src="./public/2-1@2x.png" />
      </div>
      <div class="root-frame">
        <div class="input-frame">
          <div class="input-frame-child"></div>
          <h1 class="login1">LOGIN</h1>
          <div class="divider-frame-parent">
            <div class="divider-frame">
              <div class="username-input">
                <div class="username-input-child"></div>
                <input class="username" type="text" placeholder="Username"/>
              </div>
              <div class="login-button">
                <div class="login-button-child"></div>
                <input class="password" type="text" placeholder="Password"/>
              </div>
            </div>
            <div class="divider-frame1">
              <button class="rectangle-parent">
                <div class="frame-child"></div>
                <div class="login2" id="lOGINText">LOGIN</div>
              </button>   
              <button class="rectangle-parent">
                <div class="frame-item"></div>
                <div onClick={navigateToSignUp} class="sign-up2" id="sIGNUPText">SIGN UP</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
{/*
    <script>
      var lOGINText = document.getElementById("lOGINText");
      if (lOGINText) {
        lOGINText.addEventListener("click", function (e) {
          // Please sync "Home w/ Login" to the project
        });
      }
      
      var sIGNUPText = document.getElementById("sIGNUPText");
      if (sIGNUPText) {
        sIGNUPText.addEventListener("click", function (e) {
          // Please sync "Sign-Up" to the project
        });
      }
      </script>
    */}
    </body>

</div>
  );
    };

export default Login;
