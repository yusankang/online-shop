<template>
    <div class="offcanvas offcanvas-end"
        ref="offcanvas"
        data-bs-scroll="true" data-bs-backdrop="false"
        tabindex="-1" id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                購物車
            </h5>
            <button type="button" class="btn-close"
                data-bs-dismiss="offcanvas" aria-label="Close">
            </button>
        </div>
        <div class="offcanvas-body">
          <table class="table table-sm align-middle mb-3"
            v-if="cart.final_total > 0">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                  <td style="width: 70px;" class="ps-0">
                    <img :src="item.product.imageUrl" alt="product image"
                      class="img-fluid">
                  </td>
                  <td class="fs-6">
                    <div>
                      <div class="d-flex justify-content-between align-items-start">
                        <h5 class="fs-6 m-0">{{item.product.title}}</h5>
                        <button type="button"
                            class="btn btn-sm text-warning"
                            @click="deleteItem(item)"
                            :disabled="isLoading">
                            <i class="bi bi-trash3"></i>
                        </button>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <span>單價 ${{$filters.currency(item.product.price)}}</span>
                        <div>{{item.qty}}/{{ item.product.unit }}</div>
                      </div>
                      <strong>${{ $filters.currency(item.total) }}</strong>
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="d-flex justify-content-center my-5 text-warning">
            <h5>購物車沒有商品</h5>
          </div>
          <p class="text-center">訂單滿$2,000免運！</p>
          <div class="d-grid mt-3">
              <router-link to="/user/cart" class="btn btn-warning"
                  @click.prevent="hideOffcanvas"
                  v-if="cart.final_total > 0">前往購物車</router-link>
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
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'deleteItem']),
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
