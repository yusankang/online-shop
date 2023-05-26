<template>
    <section class="horizontal-scroll">
     <div class="wrapper">
      <font-awesome-icon class="chevron" id="left" icon="fa-solid fa-angle-left" />
      <div class="carousel">
        <img src="../assets/images/product-images/cookware/castiron-pan.jpg"
          alt="img" draggable="false">
        <img src="../assets/images/product-images/cookware/pink-castiron-pot.jpg"
          alt="img" draggable="false">
        <img src="../assets/images/product-images/dishware/green-leaf-dish.jpg"
          alt="img" draggable="false">
        <img src="../assets/images/product-images/dishware/pink-dishes.jpg"
          alt="img" draggable="false">
        <img src="../assets/images/product-images/glassware/gold-rim-wineglass.jpg"
          alt="img" draggable="false">
      </div>
      <font-awesome-icon class="chevron" id="right" icon="fa-solid fa-angle-right" />
    </div>
   </section>
</template>

<script>
import horizontalScrollMixin from '@/mixins/horizontalScrollMixin';

export default {
  mixins: [horizontalScrollMixin],
};
</script>
