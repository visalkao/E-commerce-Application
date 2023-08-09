<template>
    <div style="width: 100%">
        
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
          <router-link class="row justify-content-center align-items-center" v-bind:to="'/products/'+item.id" id="view-detail">
              <button>View Detail</button>
            </router-link>
        </div> 
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


.product{
  position: absolute;
  left: 350px;
  top: 550px;
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