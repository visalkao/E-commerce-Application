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
  <p style="width: 1200px;"> Since the website is in production, I would like to ask for your understanding that the routing might not work well now, but I am working on it. For the next submission, I will make sure everything works just fine.</p>
  <br>
  <br>
  <p style="width: 200px;"> Here are links to each pages</p>
  <br>
  <nav>
    <RouterLink to="/homepage">Home        </RouterLink>
    <RouterLink to="/about">About         </RouterLink>   
    <RouterLink to="/shopping">Shopping          </RouterLink>
    <br>
    <RouterLink to="/landing">Landing      </RouterLink>
    <RouterLink to="/signin">signin       </RouterLink>
    <RouterLink to="/shopping">Shopping        </RouterLink>
  </nav>
  <br>
  <br>
  <br>
  
  <RouterView />
 
</template>
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/home');
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
  
</style>
