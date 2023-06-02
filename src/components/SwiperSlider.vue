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
            class="default-slider px-5 pb-5"
        >
            <swiper-slide v-for="item in products" :key="item.title"
                class="swiper-slide">
                <div class="card h-100 border-0">
                    <img :src="item.imageUrl" alt="product image"
                        class="card-img-top" style="min-height: 250px">
                    <div class="card-body" style="transform: rotate(0)">
                      <div class="d-flex justify-content-between">
                        <h5 class="card-title"> {{ item.title }}</h5>
                        <a href="#" class="position-relative z-3">
                          <i class="bi bi-suit-heart"></i>
                        </a>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="card-text m-0">
                          <s>${{$filters.currency(item.origin_price)}}</s>
                          <span class="fw-bold">
                              ${{$filters.currency(item.price)}}
                          </span>
                        </p>
                        <a href="#" class="stretched-link">
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

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
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
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((response) => {
        this.products = response.data.products;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
