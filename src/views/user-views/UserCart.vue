<template>
  <div class="container pt-5">
    <h3 class="text-white text-center pt-5 permanent-marker">Shopping Cart</h3>
    <CartProgressBar :progress-bar="progressBar" />
    <div
      class="d-flex flex-column align-items-center justify-content-center"
      v-if="cart.final_total === 0"
    >
      <h5 class="text-white my-5">購物車沒有商品</h5>
      <router-link to="/user/products" class="btn btn-warning mb-5">
        開始購物
      </router-link>
    </div>

    <div class="row d-flex justify-content-center gx-4">
      <div class="col-md-7 mb-3">
        <OrderItemsTotal :progress="progressBar" ref="orderItems" />
      </div>
      <div class="col-md-5">
        <div class="card border-0 mb-3">
          <OrderPriceTotal :progress="progressBar" ref="orderPrice" />
        </div>
        <div
          class="d-flex justify-content-center justify-content-md-end"
          v-if="cart.final_total > 0"
        >
          <button type="button" class="btn btn-outline-warning btn-sm me-3" @click="deleteCart">
            刪除購物車
          </button>
          <router-link to="/user/products" class="btn btn-outline-light btn-sm">
            繼續購物
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import productsStore from '@/stores/productsStore';
import CartProgressBar from '../../components/user-components/CartProgressBar.vue';
import OrderPriceTotal from '../../components/user-components/OrderPriceTotal.vue';
import OrderItemsTotal from '../../components/user-components/OrderItemsTotal.vue';

export default {
  components: {
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
    ...mapActions(cartStore, ['deleteCart']),
    ...mapActions(productsStore, ['scrollToTop']),
  },
  created() {
    this.scrollToTop();
  },
};
</script>
