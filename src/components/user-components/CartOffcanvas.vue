<template>
  <div
    class="offcanvas offcanvas-end"
    ref="offcanvas"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasScrollingLabel">購物車</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <table class="table table-sm align-middle" v-if="cart.final_total > 0">
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <td style="width: 90px" class="ps-0">
              <img :src="item.product.imageUrl" :alt="item.product.title" class="img-fluid" />
            </td>
            <td class="py-3">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="fs-6 mt-2">
                  <strong>{{ item.product.title }}</strong>
                </h5>
                <button
                  type="button"
                  class="btn btn-sm text-warning p-0 border-0"
                  @click="deleteItem(item)"
                  :disabled="isLoading"
                  style="width: 44px; height: 44px;"
                >
                  <i class="bi bi-trash3" style="font-size: 22px"></i>
                </button>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span>單價 ${{ $filters.currency(item.product.price) }}</span>
                <div>{{ item.qty }}/{{ item.product.unit }}</div>
              </div>
              <div>
                <label for="qty" class="input-group input-group-sm my-2">
                  <button
                    class="btn btn-outline-warning"
                    type="button"
                    @click.prevent="checkQty(item, 'subtract')"
                    :disabled="isLoading"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    type="text"
                    id="qty"
                    class="form-control bg-white"
                    v-model.number="item.qty"
                    disabled
                  />
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
                  <button
                    class="btn btn-outline-warning"
                    type="button"
                    @click.prevent="checkQty(item, 'add')"
                    :disabled="isLoading"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </label>
              </div>
              <div class="d-flex justify-content-between">
                <strong>${{ $filters.currency(item.total) }}</strong>
                <span v-if="message && itemId === item.id" class="text-danger">
                  {{ message }}{{ item.product.unit }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="d-flex flex-column align-items-center mt-5 text-warning">
        <h5 class="mb-3">購物車沒有商品</h5>
        <router-link to="/user/products" class="btn btn-warning mb-3" @click="hideOffcanvas">
          開始購物
        </router-link>
      </div>
      <p class="text-center">訂單滿$2,000免運！</p>
      <div class="d-grid mt-3">
        <router-link
          to="/user/cart"
          class="btn btn-warning"
          @click.prevent="hideOffcanvas"
          v-if="cart.final_total > 0"
        >
          前往購物車
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  computed: {
    ...mapState(cartStore, ['cart', 'message', 'itemId']),
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'deleteItem', 'checkQty']),
    showOffcanvas() {
      this.offcanvas.show();
    },
    hideOffcanvas() {
      this.offcanvas.hide();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.offcanvas);
    this.getCart();
  },
};
</script>
