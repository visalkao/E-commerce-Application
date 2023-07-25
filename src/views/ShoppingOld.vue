<template>
  <div style="width: 100%"> <!-- contain whole page-->
    <!-- <div style="background-color: gray;">
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
            <button style="border: none;background-color: white; border-color: white; background: transparent;"><u>Signup</u></button> | <button style="background-color: white; border: none;border-color: white; background: transparent;"><u>Sign In</u></button>
            
         

          </span>
        </div>
      </div> -->
  
  




      <br>
      <br>
      <div class="product-row" v-for="row in productRows" :key="row[0].name">
        <div v-for="product in row" :key="product.name" class="product-tile">
          <img :src="product.pictureUrl" alt="Product image" class="product-image thumbnail" @click="showFullScreen(product.pictureUrl)">
          <div id="fullscreen-overlay" @click="cancelFullScreen()" v-show="showOverlay"></div>
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

        <!-- <div class="footerpage">
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
        </div> -->


      </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Shopping-item',
  setup() {
    const products = ref([]);
    const productRows = computed(() => {
      const rows = [];
      for (let i = 0; i < products.value.length; i += 4) {
        rows.push(products.value.slice(i, i + 4));
      }
      return rows;
    });

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:3030/');
        products.value = response.data;
      } catch (err) {
        console.error(err);
      }
    });

    const showFullScreen = (imageUrl) => {
      // Function logic here
      this.fullScreenImage = imageUrl;
      this.showOverlay = true;
      document.addEventListener("keydown", this.cancelFullScreenOnEscape);
    };

    const cancelFullScreen = () => {
      // Function logic here
      this.fullScreenImage = null;
      this.showOverlay = false;
      document.removeEventListener("keydown", this.cancelFullScreenOnEscape);
    };

    const cancelFullScreenOnEscape = (event) => {
      // Function logic here
      if (event.key === "Escape") {
        this.cancelFullScreen();
      }
    };

    return {
      productRows,
      showFullScreen,
      cancelFullScreen,
      cancelFullScreenOnEscape
    };
  }
};
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
  /* .Sign{
    position: inherit;
    left: 60%;
    top: 3px;
    border: none;
  } */
  
  .product{
    position: absolute;
    left: 350px;
    top: 550px;
  }
  /*.footerpage{
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
  }*/
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
   /*product tiles button*/ 
  button{
    cursor: pointer;
  }
  .product-btn:hover {
    background-color: #888;
    cursor: pointer;
  }

  #fullscreen-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    cursor: pointer;
  }
  
  #fullscreen-image {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
  }
  
</style>