<template>
  <div style="background-color: rgba(42, 62, 51, 0.8); min-height: 100vh">
    <Navbar />
    <header class="homepage-header header-img d-flex align-items-center justify-content-center">
      <div>
        <h2 class="text-white text-center display-3 permanent-marker">Wilderness kitchen</h2>
        <div class="d-grid gap-2 col-5 mx-auto my-3">
          <button
            type="button"
            class="btn btn-light"
            @click.prevent="goToProductCategory('all')"
          >
            開始購物
          </button>
        </div>
      </div>
    </header>

    <section class="py-5">
      <div class="mb-5 mx-md-auto px-5 px-md-0 col-12 col-md-6">
        <h4 class="text-white text-center permanent-marker fs-2 mb-5">Love Nature x Love Food</h4>
        <p class="text-white text-center fs-5">
          在大自然中享受美食的樂趣是獨一無二的，在野生廚房，帶著你的廚房探索世界，讓大自然成為你的靈感來源。
        </p>
        <p class="text-white text-center fs-5">
          There's nothing like enjoying good food in the great outdoors. At Wilderness Kitchen, take
          your kitchen with you anywhere. Let nature be your inspiration.
        </p>
      </div>

      <div class="row my-4 g-0">
        <div class="col-12 col-md-4 product-menu" v-for="item in productMenu" :key="item.title">
          <a href="#" @click.prevent="goToProductCategory(item.category)">
            <div class="menu-item">
              <div class="menu-img">
                <img
                  :src="require(`../../assets/images/${item.imgUrl}`)"
                  class="img-fluid"
                  :alt="item.title"
                />
                <span
                  class="color-overlay"
                  :style="`background-color: ${item.backgroundColor}`"
                ></span>
              </div>
              <div class="menu-text d-flex flex-column hvr-forward">
                <h5 class="m-0 fs-4">{{ item.title }}</h5>
                <h5 class="m-0 fs-3 permanent-marker">{{ item.titleEng }}</h5>
                <i class="bi bi-arrow-right-short fs-2 mt-2"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <h2 class="text-white mb-4 text-center permanent-marker">SALE</h2>
    <h2 class="text-white mb-4 text-center">特價熱賣</h2>
    <SwiperSlider :category="'sale'" />
    <div class="d-flex justify-content-end">
      <button
        type="button"
        class="btn btn-outline-light btn-sm me-5"
        @click.prevent="goToProductCategory('sale')"
      >
        看更多
      </button>
    </div>
    <div
      class="alert bg-white alert-dismissible fade show p-3 mx-auto fixed-bottom my-1 blinking"
      role="alert"
      ref="saleAlert"
      style="width: 300px"
    >
      夏季全店特價7折優惠碼 'summer7'
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';
import Alert from 'bootstrap/js/dist/alert';
import SwiperSlider from '../../components/user-components/SwiperSlider.vue';
import Navbar from '../../components/user-components/UserNavbar.vue';
import Footer from '../../components/user-components/UserFooter.vue';

export default {
  name: 'HomePage',
  components: {
    SwiperSlider,
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(productsStore, ['category']),
  },
  data() {
    return {
      productMenu: [
        {
          title: '戶外廚具',
          titleEng: 'Cookware',
          category: '廚具',
          imgUrl: 'layout-images/menu-image-cookware.jpg',
          height: 150,
          backgroundColor: 'rgba(42,62,51)',
        },
        {
          title: '咖啡系列',
          titleEng: 'Coffee Gear',
          category: '咖啡',
          imgUrl: 'layout-images/menu-image-coffee.jpg',
          height: 150,
          backgroundColor: 'rgba(111,66,37)',
        },
        {
          title: '野餐系列',
          titleEng: 'Picnic Gear',
          category: '野餐',
          imgUrl: 'layout-images/menu-image-picnic.jpg',
          height: 150,
          backgroundColor: 'rgba(188,121,53)',
        },
      ],
    };
  },
  methods: {
    ...mapActions(productsStore, ['setCategory', 'scrollToTop']),

    goToProductCategory(category) {
      this.setCategory(category);
      this.$router.push('/user/products');
    },
  },
  created() {
    this.scrollToTop();
  },
  mounted() {
    this.alert = new Alert(this.$refs.saleAlert);
  },
};
</script>
