<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
    <div class="swiper-wrapper">
        <swiper-container
            :slides-per-view="4"
            :space-between="30"
            :modules="modules"
            :navigation="true"
            :pagination="pagination"
            :breakpoints="breakpoints"
            :grabCursor="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="default-slider px-5 pb-5">
            <swiper-slide v-for="item in swiperProducts" :key="item.title"
                class="swiper-slide">
                <div class="card h-100 border-0">
                  <img :src="item.imageUrl" alt="product image"
                        class="card-img-top"
                        style="min-height: 250px; height: 20vw; object-fit: cover;">
                  <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title fs-6">
                      {{ item.title }}
                      </h5>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                      <p class="card-text m-0">
                        <s v-if="item.origin_price !== item.price">
                          ${{$filters.currency(item.origin_price)}}
                        </s>
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
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script>
import {
  Navigation, Pagination, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import { mapState, mapActions } from 'pinia';
import productsStore from '@/stores/productsStore';

export default {
  computed: {
    ...mapState(productsStore, ['allProducts']),
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Swiper,
    SwiperSlide,
  },
  props: ['category'],
  watch: {
    category() {
      this.checkCategory();
    },
  },
  data() {
    return {
      swiperProducts: [],
      pagination: {
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  },
  setup() {
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    // };
    // const onSlideChange = () => {
    //   console.log('slide change');
    // };
    return {
      // onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, A11y],
    };
  },
  methods: {
    ...mapActions(productsStore, ['getProducts', 'setCategory']),
    getProduct(id) {
      console.log('clicked product', id);
      this.$router.push(`/user/product/${id}`);
      this.$emit('productId', id);
    },
    checkCategory() {
      if (this.category === 'sale') {
        this.getSaleProducts();
      } else if (this.category === 'other') {
        const arr = this.allProducts;
        const num = 7;
        this.getOtherProducts(arr, num);
      }
    },
    getSaleProducts() {
      this.swiperProducts = this.allProducts.filter((item) => item.origin_price > item.price);
    },
    getOtherProducts(arr, num) {
      const randomProducts = [...arr].sort(() => 0.5 - Math.random());
      this.swiperProducts = randomProducts.slice(0, num);
    },
  },
  async created() {
    await this.getProducts();
    this.checkCategory();
  },
};
</script>
