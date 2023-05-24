<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide"
        data-bs-ride="carousel" ref="carousel">
        <div class="carousel-indicators">
            <button type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                class="active" aria-current="true" aria-label="Slide 1">
            </button>
            <button type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2">
            </button>
            <button type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3">
            </button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active"
                v-for="(image, key) in images" :key="key">
                <img :src="require(`../assets/images/${image.imgUrl}`)"
                    class="d-block w-100" alt="..."
                     :height="image.height" style="object-fit: cover">
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from 'bootstrap/js/src/carousel';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      default() { return []; },
    },
  },
  mounted() {
    const carouselEl = this.$refs.carousel;
    const carousel = new Carousel(carouselEl, {
      interval: 5000,
    });
    console.log(carousel);
  },
};
</script>
