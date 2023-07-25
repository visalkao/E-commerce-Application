<!-- <template>
    <div class="container">
      <div class="headerpage">
        <span class="logo">
          <img style="width:60px; height:60px;" alt="Store Logo" src="../assets/images/instagram.png">
        </span>
        <span class="name-store">
          Specter Store
          <div class="slogan">
            Your one and Only Trusted Partner
          </div>
        </span>
        <span class="Sign">
          <button style="background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border-color: white; background: transparent;"><u>Sign In</u></button>
        </span>
      </div>
  
      <div class="textdescription">
        <h1>Specter Store: Where Style Meets Convenience</h1>
        <p>Welcome to Specter Store, your one-stop-shop for all things fashion. Our online store offers a wide range of trendy and stylish clothing options for men and women. From chic tops to fashionable bottoms, we have it all. Our goal is to provide you with a seamless and convenient shopping experience, so you can find the perfect outfit from the comfort of your own home. Whether you're looking for the latest fashion trends or timeless classics, we've got you covered. So why wait? Start shopping now and elevate your wardrobe with Specter Store.</p>
      </div>
  
      <h1 class="promotions">
        Promotions
      </h1>
  
      <div class="product">
        <img style="width: 800px" src="../assets/images/products.png">
      </div>
  
      <div class="footerpage">
        <span class="imagecart">
          <img style="width: 50px; height: 50px;" src="../assets/images/shopping-cart.png">
        </span>
        <span class="view-cart">
          View Cart
        </span>
      </div>
  
      <div class="signin">
        Sign In:     
        <span class="signin-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </div>
    </div>
  </template>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .headerpage {
    background-color: gray;
    position: relative;
    height: 100px;
    width: 100vw;
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: large;
    margin-left: 30px;
  }
  
  .name-store {
    font-size: large;
    margin-left: 8px;
    color: black;
  }
  
  .slogan {
    font-size: medium;
    margin-left: 68px;
    color: black;
  }
  
  .Sign {
    margin-left: auto;
    margin-right: 30px;
  }
  
  .textdescription {
    background-color: gray;
    color: black;
    padding: 50px;
    margin-top: 50px;
  }
  
  .promotions {
    margin-top: 50px;
  }
  
  .product {
    margin-top: 20px;
  }
  
  .footerpage {
    background-color: gray;
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
  }
  
  .imagecart {
    margin-left: 50px;
    margin-top: 25px;
  }
  
  .view-cart {
    font-size: medium;
    color: white;
    margin-left: 10px;
    margin-top: 15px;
  }
  
  .signin {
    color: white;
    position: absolute;
    top: 1390px;
  }
  
  .signin-text {
    background-color: white;
    color: white;
    width: 400px;
    height: 40px;
    border-radius: 2px;
  }
  </style>
   -->
   <template>
    <div class="container">
      <!-- <div class="headerpage">
        <span class="logo">
          <img style="width:60px; height:60px;" alt="Store Logo" src="../assets/images/instagram.png">
        </span>
        <span class="name-store">
          Specter Store
          <div class="slogan">
            Your one and Only Trusted Partner
          </div>
        </span>

        <span class="Sign">
          <button style="background-color: white; border-color: white; background: transparent;"><u>Sign Up</u></button> | <button style="background-color: white; border-color: white; background: transparent;"><u>Sign In</u></button>
        </span>
      </div>
   -->
      <div class="textdescription">
        <h1>Specter Store: Where Style Meets Convenience</h1>
        <p>Welcome to Specter Store, your one-stop-shop for all things fashion. Our online store offers a wide range of trendy and stylish clothing options for men and women. From chic tops to fashionable bottoms, we have it all. Our goal is to provide you with a seamless and convenient shopping experience, so you can find the perfect outfit from the comfort of your own home. Whether you're looking for the latest fashion trends or timeless classics, we've got you covered. So why wait? Start shopping now and elevate your wardrobe with Specter Store.</p>
      </div>
  
      <h1 class="promotions">
        Promotions
      </h1>
  
      <div class="product">
        <img src="../assets/images/products.png">
      </div>
  
      <!-- <div class="footerpage">
        <span class="imagecart">
          <img style="width: 50px; height: 50px;" src="../assets/images/shopping-cart.png">
        </span>
        <span class="view-cart">
          View Cart
        </span>
      </div>
  
      <div class="signin">
        Sign In:
        <span class="signin-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
      </div> -->
    </div>
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
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
  }
  
  .headerpage {
    background-color: gray;
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: large;
    margin-left: 30px;
  }
  
  .name-store {
    font-size: large;
    margin-left: 8px;
    color: black;
  }
  
  .slogan {
    font-size: medium;
    margin-left: 68px;
    color: black;
  }
  
  .Sign {
    margin-left: auto;
    margin-right: 30px;
  }
  
  .textdescription {
    background-color: gray;
    color: black;
    padding: 50px;
    margin-top: 50px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .promotions {
    margin-top: 50px;
  }
  
  .product {
    margin-top: 20px;
  }
  
  .footerpage {
    background-color: gray;
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
  }
  
  .imagecart {
    margin-left: 50px;
    margin-top: 25px;
  }
  
  .view-cart {
    font-size: medium;
    color: white;
    margin-left: 10px;
    margin-top: 15px;
  }
  
  .signin {
    color: white;
    position: absolute;
    bottom: 20px;
  }
  
  .signin-text {
    background-color: white;
    color: white;
    width: 400px;
    height: 40px;
    border-radius: 2px;
  }
  </style>
  





  