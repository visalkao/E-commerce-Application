<template>
    <!-- <div class="container">
      <div class="headerpage">
        <span class="logo">
          <img style="width:60px; height:60px;" alt="Store Logo" src="../assets/images/instagram.png">
        </span>
        <span class="name-store">
          Specter Store
          <div class="slogan">
            Your one and Only Trusted Partner
          </div>
        </span>
        <span class="Sign">
          <button style="background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border-color: white; background: transparent;"><u>Sign In</u></button>
        </span>
      </div> -->

      ........................................................................................................................................................................................................................................................................................
      <div class="signin">
            <div class="container">
              <label for="uname">Username</label>
              <input type="text" placeholder="Enter Username" name="uname" required>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
          
              <button type="submit" id="sm">Login</button>
  
            </div>
          
            <div class="container" style="background-color:#f1f1f1">
              <button type="button" class="cancelbtn">Cancel</button>
              <span class="psw">Forgot <a href="#">password?</a></span>
            </div>

      </div>

<!--       
    
      <div class="footerpage">
        <span class="imagecart">
          <img style="width: 50px; height: 50px;" src="../assets/images/shopping-cart.png">
        </span>
        <span class="view-cart">
          View Cart
        </span>
      </div>
  
      <div class="signin">
        Sign In:
        <span class="signin-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </div>
    </div> -->
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
}

.headerpage {
  background-color: gray;
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
}

.logo {
  font-size: large;
  margin-left: 30px;
}

.name-store {
  font-size: large;
  margin-left: 8px;
  color: black;
}

.slogan {
  font-size: medium;
  margin-left: 68px;
  color: black;
}

.Sign {
  margin-left: auto;
  margin-right: 30px;
}



.footerpage {
  background-color: gray;
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
}

.imagecart {
  margin-left: 50px;
  margin-top: 25px;
}

.view-cart {
  font-size: medium;
  color: white;
  margin-left: 10px;
  margin-top: 15px;
}

.signin {
  color: white;
  position: absolute;
  bottom: 20px;
}

.signin-text {
  background-color: white;
  color: white;
  width: 400px;
  height: 40px;
  border-radius: 2px;
}










  /* Full-width inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  /* Set a style for all buttons */
  #sm {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  
  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }
  
  /* Extra style for the cancel button (red) */
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  
  /* Center the avatar image inside this container */
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  
  /* Avatar image */
  img.avatar {
    width: 40%;
    border-radius: 50%;
  }
  
  /* Add padding to containers */
  .container {
    padding: 16px;
  }
  
  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-top: 16px;
  }
  
  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
  
</style>






