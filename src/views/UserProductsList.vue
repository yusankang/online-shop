<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
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
          <li class="list-group-item active" aria-current="true">
            <a href="#" @click.prevent="filterCategory('all')">全部商品</a>
          </li>
          <li class="list-group-item">
            <a href="#" @click.prevent="filterCategory('廚具')">戶外廚具</a></li>
          <li class="list-group-item">
            <a href="#" @click.prevent="filterCategory('餐具')">戶外餐具</a></li>
          <li class="list-group-item">咖啡系列</li>
          <li class="list-group-item">野餐系列</li>
        </ul>
      </div>

      <!-- product list -->
      <div class="col-9 mb-5">
        <div class="row gy-4">
          <div class="col-4"
            v-for="item in filteredItems" :key="item.id">
            <div class="card h-100 border-0">
              <img :src="item.imageUrl" alt="product image"
                    class="card-img-top"
                    style="min-height: 250px; height: 20vw; object-fit: cover;">
              <div class="card-body d-flex flex-column ps-4">
                <h5 class="card-title fs-6">
                  {{ item.title }}
                </h5>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <p class="card-text m-0">
                    <s>${{$filters.currency(item.origin_price)}}</s>
                    <span class="text-warning fw-bold">
                        ${{$filters.currency(item.price)}}
                    </span>
                  </p>
                  <button class="btn bg-none stretched-link">
                      <i class="bi bi-arrow-right fs-4"></i>
                  </button>
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

 <style>
 .card button:hover {
  color: orange;
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
      filteredItems: [],
      category: 'all',
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
        this.pagination = response.data.pagination;
        this.products = response.data.products;
        console.log('this is 1', this.products);
      });
    },
    filterCategory(category) {
      this.getProducts();
      this.category = category;
      if (this.category === 'all') {
        this.filteredItems = this.products;
        console.log('this is 2', this.filteredItems);
      } else if (this.category !== 'all') {
        this.filteredItems = this.products.filter((item) => item.category === this.category);
        console.log('this is 3', this.filteredItems);
      }
    },
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
  created() {
    this.filterCategory('all');
  },
};
</script>
