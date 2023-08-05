<template>
    <div style="padding-top: 30px;"></div>
    <div class="container">
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Summarize items ({{ totalItem }})</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li v-for="product in cartItems" :key="product.id" class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">{{ product.title }}</h6>
            <small class="text-muted">{{ product.description }}</small>
          </div>
          <span class="text-muted">${{ product.price }}</span>
        </li>
        
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${{ totalPrice }}</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>

    <div class="col-md-8 order-md-1">
      
      <form class="needs-validation" novalidate>
      <h4 class="mb-3">Shipping Address :<span> #01, 271, Phnom Penh, Cambodia</span></h4>
      <hr>

      <h4>Shpping Method</h4>
        <div class="d-block my-3">
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS Ground</label>
                </div>
                <div>$2.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS 3 Days Select</label>
                </div>
                <div>$4.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS 2 Days Air</label>
                </div>
                <div>$7.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS Next Day Air</label>
                </div>
                <div>$10.00</div>
            </div>
        </div>

      
        <hr>

        <div class="d-flex justify-content-between pt-5">
            <h6 class="mb-0">
                <router-link to="/cart/checkout">
                    <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Return to Customer Information
                    </a>
                </router-link>
            </h6>
            <router-link to="/cart/checkout/payment">
                <button class="btn btn-primary btn-lg" type="submit">Continue to Payment</button>
            </router-link>
        </div>

      </form>
      
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'cartPage',
  data() {
    return {
      cartItems: [], 
    }
  },
  async created() {
    const result = await axios.get('http://localhost:3000/api/users/12345/cart');
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0,
      );
    },
    totalItem() {
      return this.cartItems.reduce(
        (count, _) => count + 1,0,
      );
    }
  }
}
</script>
<style>
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

.col-md-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-md-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

/* Specific styles */
div[style="padding-top: 30px;"] {
  padding-top: 30px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.text-muted {
  color: #6c757d;
}

.text-body {
  color: #212529;
}

.text-center {
  text-align: center;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.form-control {
  display: block;
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

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-radio .custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: #adb5bd solid 1px;
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff;
  border-color: #007bff;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath fill='white' d='M.93 1.35L.6 1.02C.24.66.25.13.6-.22c.23-.23.59-.23.82 0l.83.84 1.65-1.7c.27-.27.71-.27.97 0 .27.26.27.68 0 .95L2.54 1.61 3.36 2.4c.24.26.24.68 0 .94-.27.27-.71.27-.97 0L1.45 2.7.6 3.54c-.24.26-.68.26-.95 0-.26-.27-.26-.7 0-.96l.33-.32z'%3e%3c/path%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff;
  border-color: #007bff;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath fill='white' d='M.93 1.35L.6 1.02C.24.66.25.13.6-.22c.23-.23.59-.23.82 0l.83.84 1.65-1.7c.27-.27.71-.27.97 0 .27.26.27.68 0 .95L2.54 1.61 3.36 2.4c.24.26.24.68 0 .94-.27.27-.71.27-.97 0L1.45 2.7.6 3.54c-.24.26-.68.26-.95 0-.26-.27-.26-.7 0-.96l.33-.32z'%3e%3c/path%3e%3c/svg%3e");
}

/* Add more custom styles if needed */

</style>