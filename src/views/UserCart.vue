<template>
<Navbar></Navbar>
<div class="container pt-5">
  <h3 class="text-white text-center pt-5 permanent-marker">Shopping Cart</h3>
  <CartProgressBar :progressBar="progressBar"></CartProgressBar>
  <div class="row">
    <div class="d-flex flex-column align-items-center justify-content-center"
      v-if="cart.final_total === 0">
      <h5 class="text-white my-5">購物車沒有商品</h5>
      <router-link to="/user/products" class="btn btn-outline-warning text-white"
        type="button">Start Shopping</router-link>
    </div>

    <!-- order items total -->
    <div class="col-md-7 mb-3">
      <OrderItemsTotal :progress="progressBar" ref="orderItems"></OrderItemsTotal>
    </div>

    <!-- order price total -->
    <div class="col-md-5">
      <div class="card border-0 mb-3">
        <OrderPriceTotal :progress="progressBar" ref="orderPrice"></OrderPriceTotal>
      </div>

      <!-- delete cart/continue shopping btn -->
      <div class="d-flex justify-content-center justify-content-md-end"
        v-if="cart.final_total > 0">
        <button class="btn btn-outline-warning btn-sm me-3"
          @click="deleteAll">刪除購物車</button>
        <router-link to="/user/products"
          class="btn btn-outline-light btn-sm">繼續購物</router-link>
      </div>
    </div>
  </div>
</div>

<Footer></Footer>

</template>

<script>
import { mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';
import CartProgressBar from '../components/CartProgressBar.vue';
import OrderPriceTotal from '../components/OrderPriceTotal.vue';
import OrderItemsTotal from '../components/OrderItemsTotal.vue';

export default {
  components: {
    Navbar,
    Footer,
    CartProgressBar,
    OrderPriceTotal,
    OrderItemsTotal,
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  data() {
    return {
      progressBar: 1,
    };
  },
  methods: {
    deleteCart() {
      console.log('delete items in cart');
    },
  },
};
</script>
