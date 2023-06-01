<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<Navbar></Navbar>
<div style="background-color: rgba(42,62,51,.8)">
  <header class="products-header header-img d-flex align-items-center justify-content-center mb-5">
    <div>
      <h2 class="text-white permanent-marker display-3">In the heart of nature</h2>
      <h2 class="text-white text-center">在大自然中享受美食</h2>
    </div>
  </header>

  <section class="container">
    <div class="row">
      <!-- side bar -->
      <div class="side-bar col-3">
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">全部商品</li>
          <li class="list-group-item">戶外廚具</li>
          <li class="list-group-item">戶外餐具</li>
          <li class="list-group-item">咖啡系列</li>
          <li class="list-group-item">野餐系列</li>
        </ul>
      </div>

      <!-- product list -->
      <div class="col-9">
        <div class="row gy-4">
          <div class="col-4"
            v-for="item in products" :key="item.id">
            <div class="card h-100 border-0">
              <img :src="item.imageUrl" alt="product image"
                    class="card-img-top"
                    style="min-height: 250px; height: 20vw; object-fit: cover;">
              <div class="card-body ps-4" style="transform: rotate(0)">
                <h5 class="card-title">
                  <a href="#"
                    class="stretched-link text-black text-decoration-none">
                    {{ item.title }}</a>
                </h5>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="card-text m-0">
                    <s>${{$filters.currency(item.origin_price)}}</s>
                    <span class="text-success fw-bold">
                        ${{$filters.currency(item.price)}}
                    </span>
                  </p>
                  <i class="bi bi-arrow-right pe-4 fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Pagination :pages="pagination"></Pagination>
  <Footer></Footer>
</div>
</template>

<script>
import Pagination from '../components/PaginationComponent.vue';
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';

export default {
  components: {
    Navbar,
    Footer,
    Pagination,
  },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      status: {
        loadingItem: '',
      },
    };
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        console.log(response.data.pagination);
      });
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
        this.pushMessageState(response, '加入購物車');
        this.getCart();
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
