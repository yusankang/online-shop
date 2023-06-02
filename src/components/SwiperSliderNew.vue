<template>
    <div class="swiper-wrapper">
        <swiper-container
            :modules="modules"
            :slides-per-view="swiperOptions"
            :navigation="true"
            :pagination="swiperOptions">
            <swiper-slide>
                <img :src="product.imageUrl" alt=""
                    class="card-img-top" style="max-height: 500px">
            </swiper-slide>
            <swiper-slide v-for="(item, key) in product.imagesUrl" :key="key">
                <img :src="item" alt=""
                    class="card-img-top" style="max-height: 500px; object-fit: cover">
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
  props: ['product', 'swiperOptions'],
  data() {
    return {
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
  created() {},

};
</script>
