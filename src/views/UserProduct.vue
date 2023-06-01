<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
    <div class="container mt-5">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/user/cart">購物車</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
            </ol>
        </nav>
        <div class="row gx-3">
            <article class="col-8">
                <h2 class="mb-3">{{product.title}}</h2>
                <div class="mb-3">{{product.description}}</div>
                <div class="mb-3">{{product.content}}</div>
                <img :src="product.imageUrl" alt="product image"
                class="image-fluid"
                style="height: 500px">
            </article>
            <div class="col-4">
                <div class="h5" v-if="!product.price">{{product.origin_price}} 元</div>
                <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
                <div class="h5" v-if="product.price">現在只要 {{product.price}} 元</div>
                <hr>
                <div class="mb-4">
                    <label for="qty">
                        <input type="number" id="qty" v-model="qty">
                    </label>
                </div>
                <button type="button"
                    class="btn btn-outline-danger"
                    @click="addCart(product.id)"
                    :disabled="this.status.loadingItem === product.id">
                    <div class="spinner-grow spinner-grow-sm text-dander"
                    role="status"
                    v-if="this.status.loadingItem === product.id">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車</button>
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
      product: {},
      id: '',
      status: {
        loadingItem: '',
      },
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.product = response.data.product;
        console.log(this.product);
      });
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      cart.qty = this.qty;
      this.$http.post(api, { data: cart }).then((response) => {
        console.log(cart);
        this.status.loadingItem = '';
        pushMessageState(response, '加入購物車');
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
