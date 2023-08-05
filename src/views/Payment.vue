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

      <h4 class="mb-3">Shpping Method :<span> UPS Ground, $2.00</span></h4>
      <hr>

      <h4 class="mb-3">Payment Method</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="credit">Credit Card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="debit">Visa Card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="paypal">Master Card</label>
          </div>
        </div>

        <div class="row">
          <div >
            <label for="cc-name">Card Number</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required>
            <div class="invalid-feedback">
                card number is required
            </div>
          </div>
         
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
            <label for="cc-number">Name on card</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr>

        <h4 class="mb-3">Billing Address</h4>


        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="same-address" name="billing" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="same-address">Same as shipping address</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="save-info" name="billing" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="save-info">Use different billing address</label>
          </div>
        </div>
        <hr>

        <h4 class="mb-3">Remember me</h4>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info">
          <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>

      
  

        <div class="d-flex justify-content-between pt-5">
            <h6 class="mb-0">
                <router-link to="/cart/checkout/shipping">
                    <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Return to Shipping Method
                    </a>
                </router-link>
            </h6>
            <router-link to="/thank">
                <button class="btn btn-primary btn-lg" type="submit">Complete Order</button>
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
  /* Replace Tailwind classes with equivalent CSS */
  
  /* Add padding-top */
  .padding-top-30 {
    padding-top: 30px;
  }

  /* Add Bootstrap-like container class */
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  /* Add Bootstrap-like row class */
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  /* Add Bootstrap-like column classes */
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    padding-right: 15px;
    padding-left: 15px;
  }

  /* Add Bootstrap-like ordering classes */
  .order-md-1 {
    order: 1;
  }

  .order-md-2 {
    order: 2;
  }

  /* Add margin-bottom */
  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 0.75rem;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  /* Add badge styles */
  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  .badge-secondary {
    background-color: #6c757d;
    color: #fff;
  }

  .badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  }

  /* Add Bootstrap-like list-group and list-group-item classes */
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  /* Add d-flex for flexbox support */
  .d-flex {
    display: flex !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  /* Add Bootstrap-like text classes */
  .text-muted {
    color: #6c757d !important;
  }

  /* Add Bootstrap-like button classes */
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-secondary:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
  }

  /* Add Bootstrap-like form classes */
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  /* Add custom-control for custom radio and checkbox styles */
  .custom-control {
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
  }

  .custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
  }

  .custom-radio .custom-control-label::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    border: #adb5bd solid 1px;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #f0ad4e;
    border-color: #f0ad4e;
  }

  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #f0ad4e;
    border: #f0ad4e solid 1px;
  }

  /* Add invalid-feedback class for error messages */
  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }

  /* Add custom-checkbox class for checkbox styles */
  .custom-checkbox .custom-control-label::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    width: 1rem;
    height: 1rem;
    background-color: #fff;
    border: #adb5bd solid 1px;
  }

  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #f0ad4e;
    border-color: #f0ad4e;
  }

  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: -1.5rem;
    width: 1rem;
    height: 1rem;
    background-color: #f0ad4e;
    border: #f0ad4e solid 1px;
  }

  /* Add font awesome class for arrow icon */
  .fas {
    font-family: "Font Awesome 5 Free";
  }

  .fa-long-arrow-alt-left:before {
    content: "\f30a";
  }

  /* Add Bootstrap-like pt-5 class for top padding */
  .pt-5 {
    padding-top: 3rem;
  }
</style>
