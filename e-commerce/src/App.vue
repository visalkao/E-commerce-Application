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
    <span class="headerpage">
      <span style="background-color: gray" class="logo">
        <img style="width:60px; height:60px;" alt="Store Logo" src="./assets/images/instagram.png">
      </span>
      <span class="name-store">
        Specter Store
      </span>
      <span class="slogan">
        Your one and Only Trusted Partner
      </span>
    
      <span class="Sign">
        <button style="background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border-color: white; background: transparent;"><u>Sign In</u></button>
      </span>
    </span>
  </div>
    <div>
      <div class="textdescription">
        <h1>
          Specter Store: Where Style Meets Convenience
        </h1>
        <p style="width: 1300px;">
          Welcome to Specter Store, your one-stop-shop for all things fashion. Our online store offers a wide range of trendy and stylish clothing options for men and women. From chic tops to fashionable bottoms, we have it all. Our goal is to provide you with a seamless and convenient shopping experience, so you can find the perfect outfit from the comfort of your own home. Whether you're looking for the latest fashion trends or timeless classics, we've got you covered. So why wait? Start shopping now and elevate your wardrobe with Specter Store.

        </p>
      </div>
    </div>

    <div>
      <h1 style="left: 10px;
                position: absolute;
                left: 100px;
                top: 400px;">
        Promotions
      </h1>
      <br>
      <br>
      <div class="product">
        <img style="width: 800px" src="./assets/images/products.png">
      </div>
      
    </div>

    

    <div class="footerpage">
      <span class="imagecart">
        <img style="width: 50px; height: 50px;" src="./assets/images/shopping-cart.png">
      </span>
      <span class="view-cart">
        View Cart
      </span>
    </div>
    <div style="color: white; position: absolute; left: 70%; top:1190px">
      Sign In:     
      <span style="background-color: white; color:white; left: 10px; width: 80px; height: 40px; radius: 2px;">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
    </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
.headerpage{
  background-color: #2c3e50;
}
.logo{
  font-size: large;
  position: absolute;
  left: 30px;
  top: 20px;
}
.name-store{
  font-size: large;
  position: absolute;
  left: 110px;
  top: 25px;
}
.slogan{
  font-size: medium;
  position: absolute;
  left: 110px;
  top: 50px;
}
.Sign{
  position: absolute;
  left: 85%;
  top: 30px;
}
.textdescription{
  background-color:gray;
  color: black;
  position: absolute;
  left: 50px;
  padding: 50px;
  top: 120px;
  
}
.product{
  position: absolute;
  left: 350px;
  top: 450px;
}
.footerpage{
  background-color: gray;
  position: relative;
  width: 100%;
  height: 100px;
  
  top: 1050px;
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
