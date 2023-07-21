<template>
  <div class="container pt-5">
      <h3 class="text-white text-center pt-5 permanent-marker">Thank you!</h3>
      <CartProgressBar :progressBar="progressBar"></CartProgressBar>
      <div class="d-flex flex-column align-items-center justify-content-center">
        <h5 class="text-white my-5">付款完成</h5>
        <router-link to="/"
          class="btn btn-outline-warning text-white"
          type="button">回去首頁
        </router-link>
      </div>

  </div>
</template>

<script>
import CartProgressBar from '../components/CartProgressBar.vue';

export default {
  components: {
    CartProgressBar,
  },
  data() {
    return {
      progressBar: 4,
    };
  },
};
</script>
