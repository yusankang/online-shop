<template>
  <div
    id="carousel"
    class="carousel slide carousel-fade"
    ref="carousel"
  >
    <div class="carousel-inner h-100">
      <div class="carousel-item active h-100">
        <img
          :src="product.imageUrl"
          class="d-block w-100"
          :alt="product.title"
          style="object-fit: cover"
        />
      </div>
      <div
        class="carousel-item active h-100"
        v-for="(item, key) in product.imagesUrl"
        :key="key"
      >
        <img
          :src="item"
          class="d-block w-100"
          :alt="product.title"
          style="object-fit: cover"
        />
      </div>
    </div>
    <div v-if="product.imagesUrl">
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import Carousel from 'bootstrap/js/src/carousel';

export default {
  name: 'ProductCarousel',
  props: {
    product: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  mounted() {
    const carouselEl = this.$refs.carousel;
    this.carousel = new Carousel(carouselEl, {
      interval: 4000,
    });
  },
};
</script>
