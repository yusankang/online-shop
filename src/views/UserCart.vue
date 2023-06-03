<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<Navbar></Navbar>
<div class="container pt-5">
  <h3 class="text-white text-center pt-5 permanent-marker">Shopping Cart</h3>
  <div class="row pt-5">
    <!-- items in cart table -->
    <div class="col-md-7">
      <div class="card d-md-none mb-3">
        <div class="card-body">
          <table class="table table-sm align-middle">
            <thead>
              <tr>
                <th>圖</th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <template v-if="cart.carts">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td style="width: 70px;" class="ps-0">
                    <img :src="item.product.imageUrl" alt="product image"
                    class="img-fluid"></td>
                  <td class="fs-6">{{item.product.title}}</td>
                  <td style="width: 95px">
                    <label for="qty" class="input-group input-group-sm">
                      <input type="number"
                        min="1"
                        :disabled = "status.loadingItem === item.id"
                        @change="updateCart(item)"
                        id="qty"
                        class="form-control"
                        v-model.number="item.qty"/>
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                    </label>
                  </td>
                  <td>${{$filters.currency(item.total)}}</td>
                  <td class="pe-0">
                    <button type="button"
                      class="btn btn-sm text-warning pe-0"
                      @click="openDeleteModal(item)">
                      <i class="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <!-- items in cart cards-->
      <div class="card mb-3 d-none d-md-block" style="max-width: 540px;"
        v-for="item in cart.carts" :key="item.id">
        <div class="row g-0">
          <div class="col-4" style="max-height: 200px;">
            <img :src="item.product.imageUrl" alt="product image"
              class="rounded-start h-100 w-100"
              style="object-fit: cover;">
          </div>
          <div class="col-8">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ item.product.title }}</h5>
                <button type="button"
                  class="btn btn-outline-warning btn-sm"
                  @click="openDeleteModal(item)">
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
              <p class="card-text">單價 ${{ $filters.currency(item.total) }}</p>
              <label for="qty" class="input-group input-group-sm">
                <input type="number"
                  min="1"
                  :disabled = "status.loadingItem === item.id"
                  @change="updateCart(item)"
                  id="qty"
                  class="form-control"
                  v-model.number="item.qty"/>
                  <div class="input-group-text">/ {{ item.product.unit }}</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- order total -->
    <div class="col-md-5">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="text-center card-title">訂單價格</h5>
          <table class="w-100">
            <tbody>
              <tr>
                <th>小計</th>
                <td class="text-end">$ {{ $filters.currency(cart.total) }} NTD</td>
              </tr>
              <tr v-if="isUseCoupon">
                <td class="text-success">已套用優惠卷 '{{ coupon_code }}'</td>
                <td class="text-success text-end">{{ coupon_percent / 10 }} 折</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <th class="text-success">折扣價</th>
                <td class="text-success text-end">${{ $filters.currency(cart.final_total) }} NTD
                </td>
              </tr>
              <tr>
                <th v-if="cart.carts">運費</th>
                <td class="text-end">${{ shippingFee }} NTD</td>
              </tr>
            </tbody>
            <tfoot class="table-group-divider">
              <tr>
                <th>總計</th>
                <td v-if="cart.final_total !== cart.total" class="text-end">
                  ${{ $filters.currency(cart.final_total + shippingFee) }} NTD</td>
                <td v-else class="text-end">${{ $filters.currency(cart.total) }} NTD</td>
              </tr>
              <tr>
                <td colspan="2">
                  <div class="input-group my-3">
                    <input type="text"
                      class="form-control"
                      placeholder="輸入優惠碼"
                      aria-label="Coupon code"
                      aria-describedby="coupon-button"
                      v-model="coupon_code">
                    <button class="btn btn-outline-secondary"
                      type="button"
                      id="coupon-button"
                      @click="addCouponCode">套用優惠碼</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="d-grid">
            <button class="btn btn-warning">結帳</button>
          </div>
        </div>
      </div>

      <!-- delete cart/continue shopping btn -->
      <div class="d-flex justify-content-center justify-content-md-end">
        <button class="btn btn-outline-warning btn-sm me-3"
          @click="deleteAll">刪除購物車</button>
        <button class="btn btn-outline-light btn-sm">繼續購物</button>
      </div>
    </div>
  </div>
</div>
<Footer></Footer>
<DeleteModal ref="deleteModal"
  :deleteItem="tempItem"
  @deleteItem="deleteItem"></DeleteModal>
</template>

<script>
import DeleteModal from '@/components/DeleteModal.vue';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';

export default {
  components: {
    DeleteModal,
    Navbar,
    Footer,
  },

  inject: ['emitter', 'pushMessageState'],

  data() {
    return {
      isLoading: false,
      products: [],
      cart: {},
      tempItem: {},
      coupon_code: '',
      coupon_percent: 0,
      isUseCoupon: false,
      shippingFee: 100,
      status: {
        loadingItem: '',
      },

    };
  },

  methods: {
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        this.pushMessageState(response, '加入購物車');
        this.getCart();
      });
    },

    openDeleteModal(item) {
      this.tempItem = { ...item };
      const deleteComponent = this.$refs.deleteModal;
      deleteComponent.showModal();
    },

    deleteItem() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempItem.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((response) => {
        this.isLoading = false;
        const deleteComponent = this.$refs.deleteModal;
        deleteComponent.hideModal();
        this.pushMessageState(response, '刪除品項');
        this.getCart();
      });
    },

    deleteAll() {
      console.log('deleting all items');
    },

    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.cart = (response.data.data);
        if (this.cart.carts.length >= 1) {
          if (this.cart.carts[0].coupon) {
            this.coupon_code = this.cart.carts[0].coupon.code;
            this.coupon_percent = this.cart.carts[0].coupon.percent;
            this.isUseCoupon = true;
          }
        } else {
          this.coupon_code = '';
          this.isUseCoupon = false;
        }
        console.log(this.cart);
      });
    },

    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((response) => {
        this.isLoading = false;
        this.status.loadingItem = '';
        this.pushMessageState(response, '購物車更新');
        this.getCart();
      });
    },

    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.isUseCoupon = true;
        }
        this.getCart();
      });
    },

    createOrder() {
      console.log('go to order form');
    },
  },

  created() {
    this.getCart();
  },
};
</script>
