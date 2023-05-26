<template>

    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card" style="width: 18rem;">
            <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
              class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

export default {
  components: {
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
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  data() {
    return {
      products: [
        {
          title: 'Castiron Pan',
          imgUrl: 'product-images/cookware/castiron-pan.jpg',
        },
        {
          title: 'Pink cast iron',
          imgUrl: 'product-images/cookware/pink-castiron.jpg',
        },
        {
          title: 'Green dish',
          imgUrl: 'product-images/dishware/green-leaf-dish.jpg',
        },
        {
          title: 'Pink dishes',
          imgUrl: 'product-images/dishware/pink-dishes.jpg',
        },
        {
          title: 'Pink leaf',
          imgUrl: 'product-images/dishware/pink-leaf-dish.jpg',
        },
        {
          title: 'Glasses',
          imgUrl: 'product-images/glassware/gold-rim-wineglasses.jpg',
        },
      ],
    };
  },
};
</script>
