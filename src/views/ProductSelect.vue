<template>
    <table>
        <tr>
            <th>
                <img :src="product.pictureUrl" alt="Product image" class="product-image thumbnail" @click="showFullScreen(product.pictureUrl)">    
            </th>
        </tr>
        <tr>

        </tr>
    </table>
</template>
<script>
import { onMounted, computed, ref } from 'vue';
import axios from 'axios';
export default {
    name : 'Product-item',
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