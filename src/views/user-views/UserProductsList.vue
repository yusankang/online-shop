<template>
  <LoadingOverlay :active="isLoading" />
  <header class="products-header header-img d-flex align-items-center justify-content-center mb-5">
    <div>
      <h2 class="text-white text-center permanent-marker display-3">Inspired by Nature</h2>
    </div>
  </header>

  <section class="container">
    <div class="row gy-4">
      <div class="side-bar col-md-3">
        <ul class="list-group sticky-md-top" style="top: 100px">
          <li class="list-group-item" :class="{ active: category === 'all' }">
            <a href="#" @click.prevent="getProducts('all'), setCategory('all')">全部商品</a>
          </li>
          <li class="list-group-item" :class="{ active: category === '廚具' }">
            <a href="#" @click.prevent="setCategory('廚具'), getProducts()">戶外廚具</a>
          </li>
          <li class="list-group-item" :class="{ active: category === '咖啡' }">
            <a href="#" @click.prevent="setCategory('咖啡'), getProducts()">咖啡系列</a>
          </li>
          <li class="list-group-item" :class="{ active: category === '野餐' }">
            <a href="#" @click.prevent="setCategory('野餐'), getProducts()">野餐系列</a>
          </li>
          <li class="list-group-item" :class="{ active: category === 'sale' }">
            <a href="#" @click.prevent="setCategory('sale'), getProducts()">Sale</a>
          </li>
        </ul>
      </div>

      <div class="col-md-9 mb-5 position-relative">
        <h5
          class="text-white position-absolute top-50 start-50 translate-middle"
          v-if="this.displayProducts.length === 0"
        >
          補貨中！請稍後再查詢
        </h5>
        <div class="row gy-4 mb-5">
          <div class="col-md-6 col-lg-4" v-for="item in displayProducts" :key="item.id">
            <div class="card h-100 border-0">
              <img
                :src="item.imageUrl"
                :alt="item.title"
                class="card-img-top"
                style="min-height: 250px; height: 20vw; object-fit: cover"
              />
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title fs-6">
                    {{ item.title }}
                  </h5>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                  <p class="card-text m-0">
                    <s v-if="item.origin_price !== item.price">
                      ${{ $filters.currency(item.origin_price) }}
                    </s>
                    <span class="fw-bold"> ${{ $filters.currency(item.price) }} </span>
                  </p>
                  <button
                    type="button"
                    class="btn bg-transparent stretched-link"
                    @click.prevent="getProduct(item.id)">
                    <i class="bi bi-arrow-right fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomPagination
          v-if="filteredProducts.length > 0"
          :products-num="filteredProducts.length"
          :product-category="category"
          @emit-pages="setCurrentPage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import cartStore from '@/stores/cartStore';
import statusStore from '@/stores/statusStore';
import CustomPagination from '../../components/user-components/CustomPagination.vue';

export default {
  components: {
    CustomPagination,
  },
  computed: {
    ...mapState(productsStore, [
      'allProducts',
      'filteredProducts',
      'displayProducts',
      'pagination',
      'category',
    ]),
    ...mapState(cartStore, ['cart']),
    ...mapState(statusStore, ['isLoading']),
  },
  methods: {
    ...mapActions(productsStore, [
      'getProducts',
      'filterProducts',
      'setCategory',
      'setCurrentPage',
      'scrollToTop',
    ]),

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
  },
  created() {
    this.getProducts();
    this.scrollToTop();
  },
};
</script>

<style scoped>
.card button:hover {
  color: orange;
}
.list-group-item.active a:hover {
  color: black;
}
</style>
