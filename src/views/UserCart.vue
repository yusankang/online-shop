<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-7">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>商品圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in products" :key="item.id">
                            <td style="width: 200px">
                                <div style="height: 100px,
                                    background=size: cover,
                                    background-position: center">
                                    <img :src="item.imageUrl" alt=""
                                        class="img-thumbnail">
                                </div>
                            </td>
                            <td><a href="#" class="text-dark">{{item.title}}</a></td>
                            <td>
                                <div v-if="!item.price">{{item.origin_price}} 元</div>
                                <del v-if="item.price">原價 {{item.origin_price}} 元</del>
                                <div v-if="item.price">現在只要 {{item.price}} 元</div>
                            </td>
                            <td>
                                <div class="btn-group btn-group-sm"
                                    role="group"
                                    aria-label="Basic outlined example">
                                        <button type="button"
                                            class="btn btn-outline-secondary"
                                            @click="getProduct(item.id)">
                                            查看更多
                                        </button>
                                        <button type="button"
                                            class="btn btn-outline-danger"
                                            @click="addCart(item.id)"
                                            :disabled="this.status.loadingItem === item.id">
                                            <div class="spinner-grow spinner-grow-sm
                                                text-danger" role="status"
                                                v-if="this.status.loadingItem === item.id">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                            加到購物車
                                        </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- items in cart -->
            <div class="col-md-5">
              <table class="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>品名</th>
                    <th>數量</th>
                    <th>單價</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="cart.carts">
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td style="width: 70px">
                        <button type="button" class="btn btn-outline-danger btn-sm">
                          <i class="bi bi-x-lg"></i>
                        </button>
                      </td>
                      <td>{{item.product.title}}</td>
                      <td style="width: 100px">

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
                      <td style="width: 150px">{{item.total}} 元</td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-end">總計</td>
                    <td>{{ $filters.currency(cart.total) }}</td>
                  </tr>
                  <tr v-if="cart.final_total !== cart.total">
                    <td colspan="3" class="text-end">折扣價</td>
                    <td>{{ $filters.currency(cart.final_total) }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
        </div>
    </div>
</template>

<script>
import pushMessageState from '@/methods/pushMessageState';

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      cart: {},
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        this.status.loadingItem = '';
        pushMessageState(response, '加入購物車');
      });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.cart = (response.data.data);
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
        console.log(response);
        this.getCart();
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
