<template>
    <Navbar></Navbar>
    <div class="container pt-5">
        <h3 class="text-white text-center pt-5 permanent-marker">Order Completed</h3>
        <CartProgressBar :progressBar="progressBar"></CartProgressBar>
        <div>
            <h5 class="text-white text-center">Thank you!</h5>
            <p class="text-white text-center">訂單完成</p>
        </div>

    </div>
    <Footer></Footer>
</template>

<script>
import Navbar from '../components/UserNavbar.vue';
import Footer from '../components/UserFooter.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      progressBar: 4,
    };
  },
};
</script>
