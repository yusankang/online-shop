<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
<section class="container">
  <swiper-container
      id="home-swiper"
      :modules="modules"
      :slidesPerView="1"
      :spaceBetween="10"
      navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="swiperOptions.breakpoints"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
        <swiper-slide v-for="item in products" :key="item.title"
          class="mb-5">
          <div class="card" style="width: 18rem;">
            <img :src="item.imageUrl"
              class="card-img-top" alt="">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div class="ms-2">
                <h5 class="card-title">{{item.title}}</h5>
                <p><s>${{$filters.currency(item.origin_price)}}</s>
                  <span class="text-success fw-bold"> ${{$filters.currency(item.price)}}</span></p>
              </div>
              <a href="#" class="me-2">
                <i class="bi bi-arrow-right text-dark fs-3"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
    </swiper-container>
</section>

</template>

<script>
import {
  Navigation, Pagination, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Swiper,
    SwiperSlide,
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
      swiperOptions: {
        breakpoints: {
          640: {
            slidesPerView: 2,
            spacebetween: 20,
          },
          768: {
            slidesPerView: 3,
            spacebetween: 40,
          },
        },
      },
    };
  },
  data() {
    return {
      products: [],
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
