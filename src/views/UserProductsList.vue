<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<Navbar></Navbar>
<div>
  <header class="products-header header-img d-flex align-items-center justify-content-center mb-5">
    <div>
      <h2 class="text-white permanent-marker display-3">In the heart of nature</h2>
      <h2 class="text-white text-center">在大自然中享受美食</h2>
    </div>
  </header>

  <section class="container">
    <div class="row gy-4">
      <!-- side bar -->
      <div class="side-bar col-md-3">
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: category === 'all' }">
            <a href="#" @click.prevent="getProducts('all')">全部商品</a>
          </li>
          <li class="list-group-item"
            :class="{ active: category === '廚具' }">
            <a href="#" @click.prevent="getProducts('廚具')">戶外廚具</a></li>
          <li class="list-group-item"
            :class="{ active: category === '餐具' }">
            <a href="#" @click.prevent="getProducts('餐具')">戶外餐具</a></li>
          <li class="list-group-item"
            :class="{ active: category === '咖啡' }">
            <a href="#" @click.prevent="getProducts('咖啡')">咖啡系列</a></li>
          <li class="list-group-item"
            :class="{ active: category === '野餐' }">
            <a href="#" @click.prevent="getProducts('野餐')">野餐系列</a></li>
        </ul>
      </div>

      <!-- product list -->
      <div class="col-md-9 mb-5 position-relative">
        <h5 class="text-white position-absolute top-50 start-50 translate-middle"
          v-if="this.products.length === 0">補貨中！請稍後再查詢</h5>
        <div class="row gy-4">
          <div class="col-md-6 col-lg-4"
            v-for="item in products" :key="item.id">
            <div class="card h-100 border-0">
              <img :src="item.imageUrl" alt="product image"
                    class="card-img-top"
                    style="min-height: 250px; height: 20vw; object-fit: cover;">
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title fs-6">
                  {{ item.title }}
                  </h5>
                  <a href="#" class="position-relative z-3"><i class="bi bi-suit-heart"></i></a>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <p class="card-text m-0">
                    <s>${{$filters.currency(item.origin_price)}}</s>
                    <span class="fw-bold">
                        ${{$filters.currency(item.price)}}
                    </span>
                  </p>
                  <a href="#" class="stretched-link"
                    @click.prevent="getProduct(item.id)">
                      <i class="bi bi-arrow-right fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Pagination :pages="pagination"
    v-if="this.products.length > 0"></Pagination>
  <Footer></Footer>
</div>
</template>

 <style>
 .card button:hover {
  color: orange;
 }
 .list-group-item.active a:hover {
  color: black;
 }
 </style>

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
      category: 'all',
      pagination: {},
      status: {
        loadingItem: '',
      },
    };
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getProducts(category, page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.pagination = response.data.pagination;
        const { products } = response.data;
        this.filterCategory(category, products);
        this.isActive = true;
      });
    },
    filterCategory(category, products) {
      this.products = products;
      this.category = category;
      if (this.category !== 'all') {
        this.products = this.products.filter((item) => item.category === this.category);
        console.log(this.products);
      }
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
    this.getProducts('all');
  },
};
</script>
