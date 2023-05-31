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
        <div v-for="product in row" :key="product.name" class="product-tile">
          <img :src="product.pictureUrl" alt="Product image" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-detail">{{ product.detail }}</p>
          <div class="padding-top"></div>
          <div class="product-price">
              <div>Price:</div>
              <div>{{ product.price }}</div>
          </div>
          <button class="product-btn">Add to Cart</button>
        </div> 
      </div>
      <!-- <div class="product-tile">
        <img class="product-image" src="product-image-url.jpg" alt="Product Image">
        <h3 class="product-name">Product Name</h3>
        <p class="product-detail">Product Detail</p>
        <p class="product-price">$99.99</p> -->

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
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';
export default {
    name: 'Shopping-item',

setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3030/');
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
    
    top: 150px;
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
  .product-row {
    margin: auto;
    width: 100%;
    display: flex;
  }
  .product-tile {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    width: 250px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .product-image {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  
  .product-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .product-detail {
    margin-bottom: 10px;
  }
  
  .product-price {
    color: #888;
  }

  .product-btn {
    margin-top: 10px;
    background-color: rgb(201, 156, 156)
    
  }
</style>