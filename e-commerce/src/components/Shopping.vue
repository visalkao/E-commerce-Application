<template>
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
  
  





      <div class="padding-top"></div>
      <!--Product Section-->
      <div class="product-row" v-for="row in productRows" :key="row[0].name">
        <div v-for="product in row" :key="product.name" class="product-box">
          <img :src="product.pictureUrl" alt="Product image" class="product-image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.detail }}</p>
          <div class="padding-top"></div>
          <div class="shirt-price">
              <div>Price:</div>
              <div>{{ product.price }}</div>
          </div>
          <button class="product-btn">+</button>
        </div>
      </div>











</template>
<script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';
export default {
    name: 'Shopping-item',

setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8080/');
        products.value = response.data;
      } catch (err) {
        console.error(err);
      }
    });

    const productRows = computed(() => {
      const rows = [];
      for (let i = 0; i < products.value.length; i += 4) {
        rows.push(products.value.slice(i, i + 4));
      }
      return rows;
    });

    return { productRows };
  }}
</script>
<style>
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }</style>