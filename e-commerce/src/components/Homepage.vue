<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
    <!-- <div class="header" style="position: absolute; left: 10px; top: 20px;">
      <span >
        <img style="width:40px; height:40px;" alt="Store Logo" src="./assets/images/instagram.png">
        
      </span>
      <span id="name-store" style="padding: 10px; ">
        Spector Store
        <br>
        
          Your one and only Trusted Partner
        
      </span> -->
      
    <!-- </div> -->
  
  <div style="background-color: gray;">
      <div class="headerpage">
        <span style="background-color: gray" class="logo">
          <img style="width:60px; height:60px;" alt="Store Logo" src="../assets/images/instagram.png">
        </span>
        <span class="name-store">
          Specter Store
          <div class="slogan">
            Your one and Only Trusted Partner
          </div>
        </span>
        
  
      
        <span class="Sign">
          <button style="border: none;background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border: none;border-color: white; background: transparent;"><u>Sign In</u></button>
        </span>
      </div>
    </div>




      <div>
        <div class="textdescription">
          <h1>
            Step into Style:
          </h1>

          <h1>
            Discover Our Latest Trendy Clothes
          </h1>

          <p>
            Welcome to our online clothing store, where fashion meets affordability. Our latest collection of trendy clothes is designed to keep you looking and feeling your best. Whether you're dressing up for a special occasion or looking for something comfortable to wear on the weekends, we have you covered.

          </p>
          <button class="Startshopping"> Start Shopping Now </button>
        </div>
      </div>


      <div>
        <div class="textdescription" style="top: 530px;">
          <h1>
            About Us
          </h1>
          <p>
            We believe that fashion is about expressing your unique personality and style, and that everyone deserves to feel confident and beautiful in their clothes
          </p>     
          <span>
            <img style="width: 10px; height: 10px;" src="../assets/images/instagram.png">
          </span>    
        </div>

      </div>
     
  
      
  
      <div class="footerpage">
        <span class="imagecart">
          <img style="width: 50px; height: 50px;" src="../assets/images/shopping-cart.png">
        </span>
        <span class="view-cart">
          View Cart
        </span>
      </div>
      <div style="color: white; position: absolute; left: 1100px; top:1390px">
        Sign In:     
        <span style="background-color: white; color:white; left: 10px; width: 80px; height: 40px; radius: 2px;">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </div>
    
  </template>
  
  <script>
export default {
  name: 'Homepage-item'
  // props: {
  //   msg: String
  // }
}
  </script>
  
  <style>
  div{
    border: red 1px solid;
  }
  .headerpage{
    background-color: gray;
    position: relative;
    height: 100px;
    top: 0px;
    display: flex;
    align-items: center;
  }
  .logo{
    font-size: large;
    position: inherit;
    left: 30px;
    top: 2px;
  }
  .name-store{
    font-size: large;
    position: inherit;
    left: 8px;
    color: black;
    top: 0px;
  }
  .Startshopping{
    background-color: rgba(118, 109, 220, 1);
    position: inherit;
    right: 10px;
    color: white;
    border-radius: 10%;
    padding: 5px;
    border-bottom:gray;
    border: none;
    font-size: large;
  }
  .slogan{
    font-size: medium;
    position: inherit;
    left: 68px;
    color: black;
    top: 5px;
  }
  .Sign{
    position: inherit;
    left: 60%;
    top: 3px;
    border: none;
  }
  .textdescription{
    background-color:gray;
    color: black;
    position: absolute;
    left: 2.5%;
    width: 90%;
    padding: 50px;
    top: 220px;
    text-align: left;
  }
  .aboutus{
    background-color:gray;
    color: black;
    position: absolute;
    left: 50px;
    padding: 50px;
    top: 520px;
    text-align: left;
  }
  .product{
    position: absolute;
    left: 350px;
    top: 550px;
  }
  .footerpage{
    background-color: gray;
    position: relative;
    width: 100%;
    height: 100px;
    
    top: 1150px;
    display: flex;
    justify-content: flex-start;
  }
  .imagecart{
    position: inherit;
    left: 50px;
    top: 25px;
  }
  .view-cart{
    font-size: medium;
    position: inherit;
    color: white;
    left: 80px;
    top: 40px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  