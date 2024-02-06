import React from 'react';

const login_index = () => {
  return(
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <link rel="stylesheet" href="./login_global.css" />
    <link rel="stylesheet" href="./login_index.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains Mono:wght@400&display=swap"
    />
  </head>
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
              <button class="rectangle-group">
                <div class="frame-item"></div>
                <a href="signup_index.html"><div class="sign-up" id="sIGNUPText">SIGN UP</div></a>
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
</html>
  );
    };

export default login_index;
