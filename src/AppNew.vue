<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div style="width: 12px;">
        <div class="headerpage" style="color-background: gray;">
            <span> <img src="src/assets/images/instagram.png" alt="Store Logo" style="width:60px; height:60px;"></span>
        </div>
    </div>
</template>

<style>
<!-- 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
   -->


.headerpage{
  background-color: gray;
  position: relative;
  height: 100px;
  top: 0px;
  display: flex;
  width: 1250px;
  align-items: center;
}
.logo{
  font-size: large;
  position: inherit;
  left: 30px;
  top: 2px;
}
</style>