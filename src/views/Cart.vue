<!-- <template>
  <div class="container">
    <h1>Shoping Cart</h1>
    <div v-for="product in cartItems" :key="product.id" class="container flex">
      <img :src="product.image" alt="">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button class="remove-button">Remove</button>
    </div>
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button type="button" id="checkout-button">Proceed to Checkout</button>
  </div>
</template> -->
<template>
    <!-- <div style="padding-top: 30px;"></div>
  <section class="h-100 h-custom" style="background-color: rgb(197, 195, 195);">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="border-radius: 15px;">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5">
                    <div class="d-flex justify-content-between align-items-center mb-5">
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 class="mb-0 text-muted">{{ totalItem }} items</h6>
                    </div>
                    <hr class="my-4">
  
                    <div v-for="product in cartItems" :key="product.id" class="row mb-4 d-flex justify-content-between align-items-center">
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                        :src="`http://localhost:3000${product.image}`" style="width: 100px; height: 100px;"
                          class="img-fluid rounded-3" alt="Cotton T-shirt">
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <h6 class="text-muted">{{ product.title }}</h6>
                        <h6 class="text-black mb-0">{{ product.description }}</h6>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button class="btn btn-link px-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                          <i class="fas fa-minus"></i>
                        </button>
  
                        <input id="form1" min="1" name="quantity" value="1" type="number"
                          class="form-control form-control-sm" />
  
                        <button class="btn btn-link px-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 class="mb-0">$ {{ product.price }}</h6>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <button 
                        class="btn btn-danger"
                        v-on:click="removeFromCart(product.id)"
                        >
                        <i class="fas fa-times"></i>
                      </button>
                      </div>
                    </div>
  
                    <hr class="my-4">
  
                   
  
                    <div class="pt-5">
                      <h6 class="mb-0"><router-link to="/home"><a href="#!" class="text-body"><i
                            class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></router-link></h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey" style="border-radius: 15px;">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr class="my-4">
  
                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">items ({{ totalItem }})</h5>
                      <h5>${{ totalPrice }}</h5>
                    </div>
  
  
                    <h5 class="text-uppercase mb-3">Give code</h5>
  
                    <div class="mb-5">
                      <div class="form-outline">
                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea2">Enter your code</label>
                      </div>
                    </div>
  
                    <hr class="my-4">
  
                    <div class="d-flex justify-content-between mb-5">
                      <h5 class="text-uppercase">Total price</h5>
                      <h5>${{ totalPrice }}</h5>
                    </div>
                    <router-link to="/cart/checkout">
                    <button type="button" class="btn btn-primary btn-block btn-lg"
                      data-mdb-ripple-color="dark">Checkout</button>
                    </router-link>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!DOCTYPE html>
<html>
<head>
  <title>Cart and Product Details</title>
</head>
<body style="margin: 0; padding: 0;">

  <!-- Table to divide the section into two columns -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <!-- First column -->
      <td valign="top" align="center" style="background-color: #f1f1f1; padding: 20px;">

        <!-- Your Cart -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-size: 24px; font-weight: bold; padding-bottom: 20px;">Your Cart</td>
          </tr>
        </table>

        <!-- Table listing cart item details -->
        <table width="100%" border="1" cellspacing="0" cellpadding="10">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          <!-- Sample row, repeat this row for each cart item -->
          <tr>
            <td>
              <img src="product_image.jpg" alt="Product" width="50" height="50"><br>
              Product Name
            </td>
            <td>$25.00</td>
            <td>2</td>
          </tr>
          <!-- Add more rows here for other cart items -->
          <tr>
            <td colspan="3" align="right">Subtotal: $50.00</td>
          </tr>
        </table>

      </td>

      <!-- Second column -->
      <td valign="top" align="center" style="background-color: #ddd; padding: 20px;">

        <!-- Summary -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-size: 24px; font-weight: bold; padding-bottom: 20px;">Summary</td>
          </tr>
          <!-- Product details row -->
          <tr>
            <td>
              <strong>Product Name:</strong> Sample Product<br>
              <strong>Price:</strong> $25.00<br>
              <strong>Description:</strong> Product description goes here.<br>
              <!-- Add more details about the product -->
            </td>
          </tr>
          <!-- Subtotal -->
          <tr>
            <td>
              <strong>Subtotal:</strong> $50.00
            </td>
          </tr>
          <!-- Shipping cost -->
          <tr>
            <td>
              <strong>Shipping Cost:</strong> $5.00
            </td>
          </tr>
          <!-- Total price -->
          <tr>
            <td>
              <strong>Total Price:</strong> $55.00
            </td>
          </tr>
          <!-- Checkout button -->
          <tr>
            <td>
              <RouterLink to="/cart/checkout"><button style="background-color: purple; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Check Out</button></RouterLink>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>

  </template>
  
  
  
  <script>
  import axios from 'axios';
import { RouterLink } from 'vue-router';
  // import { cartItems } from '../init-data';
  
  export default {
    name: 'cartPage',
    data() {
        return {
            cartItems: [],
        };
    },
    async created() {
        const result = await axios.get('http://localhost:3000/api/users/12345/cart');
        const cartItems = result.data;
        this.cartItems = cartItems;
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
        },
        totalItem() {
            return this.cartItems.reduce((count, _) => count + 1, 0);
        },
    },
    methods: {
        async removeFromCart(productId) {
            if (confirm('Are you sure you want to remove this item from your cart?')) {
                const result = await axios.delete(`http://localhost:3000/api/users/12345/cart/${productId}`);
                this.cartItems = result.data;
            }
        }
    },
    components: { RouterLink }
}
  </script>
  <style scoped>
   
  
  .card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
  }
  
  .card-registration .select-arrow {
  top: 13px;
  }
  
  .bg-grey {
  background-color: #eae8e8;
  }
  



/* Generic styles */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-lg-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-md-2,
.col-md-3 {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

/* Specific styles */
div[style="padding-top: 30px;"] {
  padding-top: 30px;
}

.h-100 {
  height: 100%;
}

.h-custom {
  height: calc(100% - 30px);
}

.bg-grey {
  background-color: rgb(197, 195, 195);
}

.card-registration {
  display: block;
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.75rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}

.card-registration-2 {
  border-radius: 15px;
}

.card-registration-2 .form-control {
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.card-registration-2 .form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.card-registration-2 .form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  text-align: left;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0056b3;
  border-color: #0052cc;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.form-outline {
  position: relative;
}

.form-outline .form-control {
  position: relative;
  padding: 0.75rem 1rem;
}

.form-outline .form-control:focus {
  z-index: 2;
}

/* Add more custom styles if needed */



  </style>