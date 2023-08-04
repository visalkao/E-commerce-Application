<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
       <HelloWorld msg="You did it!" /> 

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/shopping">Shopping</RouterLink>
      </nav>
      <br>
      <br>
    </div> -->
  <!-- </header> -->
  <!-- <p style="width: 1200px;"> Since the website is in production, I would like to ask for your understanding that the routing might not work well now, but I am working on it. For the next submission, I will make sure everything works just fine.</p>
  <br>
  <br>
  <p style="width: 200px;"> Here are links to each pages</p>
  <br> -->
  <!-- <nav>
    <RouterLink to="/homepage">Home        </RouterLink>
    <RouterLink to="/about">About         </RouterLink>   
    <RouterLink to="/shopping">Shopping          </RouterLink>
    <br>
    <RouterLink to="/landing">Landing      </RouterLink>
    <RouterLink to="/signin">signin       </RouterLink>
    <RouterLink to="/shopping">Shopping        </RouterLink>
  </nav> -->
  <!-- <nav>
  <span>
    <button id="home-button" @click="navigateToHome"> <u>Home Page</u> </button>
  </span>
  <span>
    <button id="shopping-button" @click="navigateToShopping"> <u>Shopping Page</u> </button>
  </span>
  <span>
    <button id="landning-button" @click="navigateToLanding"> <u>Landing Page</u> </button>
  </span>
  <span>
    <button id="signin-button" @click="navigateToSignin"> <u>Sign In</u> </button>
  </span>
  <span>
    <button id="about-button" @click="navigateToAbout"> <u>Hoddddddddddme</u> </button>
  </span>
</nav>
  <br>
  <br>
  <br> -->
  <div style="width: 100%; display:block;">
  <div class="headerpage">
    <div style="background-color: gray; display:flex;">
   
      <span style="background-color: gray;" class="logo">
        <img style="width:60px; height:60px;" alt="Store Logo" src="E-commerce-Application\src\assets\images\instagram.png">
      </span>
      <span class="name-store" >
        <h4 style="margin: 0; margin-left:80px;">Specter Store</h4>
        <div class="slogan">
          Your one and Only Trusted Partner
        </div>
      </span>
    </div>
      <!-- <span>
        <button id="home-button" @click="navigateToLanding"> <u>Landing Page</u> </button>
      </span> -->
  
  <!--   
      <span class="Sign">
        <button style="background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border-color: white; background: transparent;"><u>Sign In</u></button>
      </span> -->
    <span style="margin-left: 250px;">
      <nav>
        <RouterLink to="/home">Home</RouterLink>     
        <RouterLink to="/landing">Landing</RouterLink>
        <RouterLink to="/oldlanding"> Old Landing</RouterLink>
        <RouterLink to="/Shopping">Shopping</RouterLink>
 
      </nav>
    </span>

    <span class="Sign">
      <!-- <button style="border: none;background-color: white; border-color: white; background: transparent;"><u>Signup</u></button> | <button style="background-color: white; border: none;border-color: white; background: transparent;"><u>Sign In</u></button>
       -->
       <RouterLink to="/signin">Sign In</RouterLink><p></p>|
       <RouterLink to="/signup">Sign Up</RouterLink>

    </span>
  
    </div> 
  


  <br>
  <RouterView />
 



  <div class="footerpage">
    <span class="imagecart">
      <img style="width: 50px; height: 50px;" src="src/assets/images/shopping-cart.png">
    </span>
    <span class="view-cart">
      View Cart
    </span>
  </div>
  <div style="color: white; position: absolute; left: 1100px; top:1390px">
    Sign In:     
    <span style="background-color: white; color:white; left: 10px; width: 80px; height: 40px; radius: 2px;">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/home');
    },
    navigateToAbout() {
      this.$router.push('/about'); // same as above, but shorter and more readable for one link
    },
    navigateToLanding() {
      this.$router.push('/landing'); // same as above, but shorter and more readable for one link
    },
    navigateToShopping() {
      this.$router.push('/shopping'); // same as above, but shorter and more readable for one link
    },
    navigateToSignin() {
      this.$router.push('/signin'); // same as above, but shorter and more readable for one link
    }
  }
}
</script>
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
==========================> #app is here
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;

  margin-top: 60px;
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
  margin-left: 30px;
  font-size: larger;
  position: inherit;
  left: 80px;
  color: black;
  text-align: left;
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
  left: 60px;
  top: 3px;
  border: none;
}

.footerpage{
  background-color: gray;
  position: relative;
  width: 100%;
  height: 100px;
  
  /*top: 150px;*/
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

</style>
